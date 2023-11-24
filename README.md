# Node.js Express & MongoDB: CRUD Rest APIs

## Create order
curl --location 'http://localhost:8080/api/orders' \
--header 'Content-Type: application/json' \
--data '{
"order_id": "124",
"item_name":"Samsung Mobile",
"cost":"50",
"order_date":"2020/12/01",
"delivery_date":"2020/12/11"
}'

## Get all orders
curl --location 'http://localhost:8080/api/orders/create'

## Get order by id
curl --location 'http://localhost:8080/api/orders/search/6560554d7ca9730c508b9500'

## Update order by id
curl --location --request PUT 'http://localhost:8080/api/orders/update/6560554d7ca9730c508b9500' \
--header 'Content-Type: application/json' \
--data '{
"order_id": "124",
"item_name":"Samsung Mobile",
"cost":"1000",
"order_date":"2020/12/01",
"delivery_date":"2020/12/11"
}'

# Delete order by id
curl --location --request DELETE 'http://localhost:8080/api/orders/delete/6560554d7ca9730c508b9500'

## Project setup
```
npm install
```

### Run
```
node server.js
```
