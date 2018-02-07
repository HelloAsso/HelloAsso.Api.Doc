# You need to set MyBasicToken to your token base64(id:key)

# list actions
curl -X GET \
  https://api.helloasso.com/v3/actions.json \
  -H 'Authorization: Basic MyBasicToken' \

# list organization's actions
curl -X GET \
  https://api.helloasso.com/v3/organizations/000000249671/actions.json \
  -H 'Authorization: Basic MyBasicToken' \

# list campaign's actions
curl -X GET \
  https://api.helloasso.com/v3/organizations/000000249671/campaigns/000000026934/actions.json \
  -H 'Authorization: Basic MyBasicToken' \

# list donation actions
curl -X GET \
  https://api.helloasso.com/v3/actions.json?type=DONATION \
  -H 'Authorization: Basic MyBasicToken' \

# list actions created after 01/01/2018 and before 31/01/2018
curl -X GET \
  https://api.helloasso.com/v3/actions.json?from=2018-01-01T00:00:00&to=2018-01-31T00:00:00 \
  -H 'Authorization: Basic MyBasicToken' \

# get action detail
curl -X GET \
  https://api.helloasso.com/v3/actions/000034043170.json \
  -H 'Authorization: Basic MyBasicToken'