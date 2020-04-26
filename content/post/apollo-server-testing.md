---
title: "Testing Apollo Server with Typescript"
type: post
date: 2020-04-26
excerpt: A way to test GraphQL endpoints of an Apollo Server with a RESTDataSource in Typescript.
url: apollo-server-testing
canonical: true
extraContent:
  - {url: "https://learnitmyway.com/tdd-example/",
  title: "A really simple example of TDD"}
  - {url: "https://learnitmyway.com/learn-javascript-with-these-resources/",
  title: "Learn JavaScript with these resources"}
  - {url: "https://learnitmyway.com/learn-ruby-rails/",
  title: "Learn Ruby and Rails with these resources"}
publisherInfo: 
---

In this article, I will demonstrate a way to test GraphQL endpoints of an [Apollo Server](https://www.apollographql.com/docs/apollo-server/) with a [RESTDataSource](https://www.apollographql.com/docs/apollo-server/data/data-sources/#rest-data-source) in Typescript.

<!--more-->
<!-- og:description -->

| ![scaffolding](https://res.cloudinary.com/developerdavo/image/upload/f_auto,q_70,w_1000/v1587894780/learnitmyway/yves-alarie-LSf6sOykg-A-unsplash_eiebkc.jpg) |
|:--:|
| *Photo by Yves Alarie on [Unsplash](https://unsplash.com/photos/LSf6sOykg-A)* |

## Background

At the beginning of the month, I joined a new project that is using [Apollo Server](https://www.apollographql.com/docs/apollo-server/) as a [back end for a front end](https://samnewman.io/patterns/architectural/bff/). Some months before I joined, a [RESTDataSource](https://www.apollographql.com/docs/apollo-server/data/data-sources/#rest-data-source) was introduced but the implemented code didn't get tested. I was lucky enough to join the team in the middle of writing those missing tests and this article is a demonstration of what I came up with.

Disclaimer: I only had minimal experience with GraphQL beforehand and I still haven't invested much time into Typescript. However, my knowledge of testing should be pretty sound! That aside, having this article a week ago might have saved me a day's work.

The following exercise is inspired by the [docs](https://www.apollographql.com/docs/apollo-server/testing/testing/) and also uses [apollo-server-testing](https://www.npmjs.com/package/apollo-server-testing).

## Exercise

The app is a simple GraphQL server that can be consumed as follows:

```graphql
  query GetMovies {
    movies {
      id
      title
    }
  }
```

```graphql
  mutation CreateMovie($newMovie: NewMovie!) {
    createMovie(newMovie: $newMovie) {
      movies {
        id
        title
      }
    }
  }
```

Feel free to follow along with the [source code](https://github.com/learnitmyway/apollo-server-testing-example). (If you need help setting up eslint or nodemon, it might also be worth having a look.) Let me show you how I tested the query.

### The code under test

Let's start with the `MoviesAPI`:

```typescript
// src/MoviesAPI.ts

import { RESTDataSource } from 'apollo-datasource-rest'
import { Movie } from './types'

export default class MoviesAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:5200/'
  }

  async getMovies(): Promise<Movie[]> {
    return this.get('movies')
  }
}

```

As you can see, we have a method that fetches movies from a REST API being served at `http://localhost:5200/` with a `movies` endpoint.

The data sources:

```typescript
// src/dataSources.ts

import MoviesAPI from './MoviesAPI'

const dataSources = (): any => {
  return {
    moviesAPI: new MoviesAPI(),
  }
}

export default dataSources


```

The resolvers:

```typescript
// src/resolvers.ts

import { Movie } from './types'

const resolvers = {
  Query: {
    movies: (
      _: void,
      __: void,
      { dataSources }: { dataSources: any }
    ): Movie[] => dataSources.moviesAPI.getMovies(),
  },
}

export default resolvers

```

The type definitions:

```typescript
// src/typeDefs.ts

import { gql } from 'apollo-server'

const typeDefs = gql`
  type Movie {
    id: String
    title: String
  }

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }
`

export default typeDefs

```

### The test

To test our code we can use [apollo-server-testing](https://www.npmjs.com/package/apollo-server-testing) and create the test server as follows:

```typescript
// src/testUtils/testServer.ts

import {
  createTestClient,
  ApolloServerTestClient,
} from 'apollo-server-testing'
import { ApolloServer } from 'apollo-server'
import resolvers from '../resolvers'
import typeDefs from '../typeDefs'

export default function testServer(
  dataSources: any
): ApolloServerTestClient {
  return createTestClient(
    new ApolloServer({ typeDefs, resolvers, dataSources })
  )
}

```

Then we can create our first test as follows:

```typescript
// src/MoviesAPI.test.ts

import { Body } from 'apollo-datasource-rest/dist/RESTDataSource'
import gql from 'graphql-tag'

import MoviesAPI from './MoviesAPI'
import { Movie } from './types'

import testServer from './testUtils/testServer'
import { moviesSample } from './testUtils/moviesSample'

class MoviesAPIFake extends MoviesAPI {
  async get(path: string): Promise<any> {
    return super.get(path)
  }
}

describe('MoviesAPI', () => {
  it('fetches all movies', async () => {
    // We cannot stub a protected method,
    // so we create a fake.
    const moviesAPI = new MoviesAPIFake()

    // We create a stub because we don't
    // want to call an external service.
    // We also want to use it for testing.
    const getStub = (): Promise<Movie[]> =>
      Promise.resolve(moviesSample())
    moviesAPI.get = jest.fn(getStub)

    // We use a test server instead of the actual one.
    const { query } = testServer(() => ({ moviesAPI }))

    const GET_MOVIES = gql`
      query GetMovies {
        movies {
          id
          title
        }
      }
    `

    // A query is made as if it was a real service.
    const res = await query({ query: GET_MOVIES })

    // We ensure that the errors are undefined.
    // This helps us to see what goes wrong.
    expect(res.errors).toBe(undefined)

    // We check to see if the `movies`
    // endpoint is called properly.
    expect(moviesAPI.get).toHaveBeenCalledWith('movies')

    // We check to see if we have
    // all the movies in the sample.
    expect(res?.data?.movies).toEqual(moviesSample())
  })
})
```

### Ways to break the test

The test would break if:

- someone accidentally deletes anything from our resolver, data source method or associated type definitions
- someone adds a required field to the associated type definitions
- someone accidentally renames the endpoint
- GraphQL throws an error
- (Anything else?)

### Caveats

If you have a lot of additional logic in your data sources or resolvers, I could imagine that it might be difficult to locate the source of an error thrown. In this case, it might make more sense, to add some unit tests alongside the integration test shown above.

## Final Thoughts

For the sake of demonstration, I first showed the application code and then showed you how I would test it. In practice, I would recommend doing it the other way round.

I only ended up showing you how to test a query. If you are interested in how to test a mutation and see how the rest of the code was implemented, feel free to have a look at [the repo](https://github.com/learnitmyway/apollo-server-testing-example).

As I said at the beginning, I am quite new to GraphQL and I haven't invested much time into Typescript, so any feedback would be great. Getting rid of those `any`s would be especially helpful.