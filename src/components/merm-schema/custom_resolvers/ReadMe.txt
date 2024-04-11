Todos os resolvers que tiverm que ser incluidos automaticamente nas pipelines terão que estar aqui, não se apegue aos nomes que else
terão aqui pois eles serão alterados na pipeline.

Teremos 3 pastas:

+---------+-------------+----------------------------------------------------------------------------------------+
| Sequence| Slot name   | Description                                                                            |
+---------+-------------+----------------------------------------------------------------------------------------+
| 1       | init        | Initial resolvers that are run. Usually used for initializing default values.          |
| 2       | preAuth     | Resolvers that are intended to run before authorization rule checks are applied.       |
| 3       | auth        | Resolvers that implement authorization rule checks.                                    |
| 4       | postAuth    | Resolvers that are run after authorization rule checks.                                |
| 5       | preDataLoad | Resolvers to configure values to make a request to the data source.                    |
| 6       | postDataLoad| Resolvers for post-processing after request to data source.                            |
| 7       | finish      | Final set of resolvers before response is returned to client. Typically used for clean-up.|
+---------+-------------+----------------------------------------------------------------------------------------+



- **Query**: Onde ficarão os resolvers de querys, eles ficaram contidos nas pipelines referentes a querys (list<model_name> e get<model_name>)
    |
    |--- list
            |---- init
            |---- preAuth
            |---- auth
            |---- postAuth
            |---- preDataLoad
            |---- postDataLoad
            |---- finish
    |
    |--- get
            |---- init
            |---- preAuth
            ......

- **Mutation**: Onde ficarão os resolvers de mutations, eles ficarão contidos nas pipelines referentes a mutations (create<model_name>, update<model_name>, delete<model_name>)
    |
    |--- create 
             |--- init
             |--- preAuth
             |--- auth
             ....

    |
    |--- update
    |       |--- init
    |       |--- preAuth
    |       |--- auth
    |       ....
    |
    |--- delete
            |--- init
            |--- preAuth
            |--- auth
            ...

- **Subscription**: Onde ficarão os resolvers de subscriptions, eles ficarão contidos nas pipelines referentes a subscriptions (subscribe<model_name>)

    |
    |--- onCreate
    |       |--- init
    |       |--- preAuth
    |       |--- auth
    |       ....
    |
    |--- onUpdate
    |       |--- init
    |       |--- preAuth
    |       |--- auth
    |       ....
    |
    |--- onDelete
            |--- init
            |--- preAuth
            |--- auth
            ...


