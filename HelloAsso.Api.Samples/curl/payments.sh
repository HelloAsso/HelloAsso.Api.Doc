# You need to set MyBasicToken to your token base64(id:key)

# list payments
curl -X GET \
  https://api.helloasso.com/v3/payments.json \
  -H 'Authorization: Basic MyBasicToken' \

# list organization's payments
curl -X GET \
  https://api.helloasso.com/v3/organizations/000000249671/payments.json \
  -H 'Authorization: Basic MyBasicToken' \

# list campaign's payments
curl -X GET \
  https://api.helloasso.com/v3/organizations/000000249671/campaigns/000000026934/payments.json \
  -H 'Authorization: Basic MyBasicToken' \

# list credit payments
curl -X GET \
  https://api.helloasso.com/v3/payments.json?type=CREDIT \
  -H 'Authorization: Basic MyBasicToken' \

# list payments created after 01/01/2018 and before 31/01/2018
curl -X GET \
  https://api.helloasso.com/v3/payments.json?from=2018-01-01T00:00:00&to=2018-01-31T00:00:00 \
  -H 'Authorization: Basic MyBasicToken' \

# get payment detail
curl -X GET \
  https://api.helloasso.com/v3/payments/000017607661.json \
  -H 'Authorization: Basic MyBasicToken'