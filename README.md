# Help Button Service

## Getting Started

Run the Backend

```
docker-compose up
```

Visit the Hasura local instance at: http://localhost:8080

## Developing in Hasura

When developing in the Hasura local instance, you MUST run Hasura in console-mode when you make changes; this will track those changes to the local file system.

Run the console

```
cd hasura
hasura console
```

A browswer will automatically display.  Any changes made in the console-mode browswer will be tracked as migration changes in the local file system.

## Applying Hasura Changes

```
cd hasura
hasura migrate apply
```