package payments

import (
	"fmt"
	"net/http"
	"io/ioutil"
	"encoding/base64"
)

// You need to set id and key
id := ""
key := ""
data := []byte(id + ":" + key)
token := base64.StdEncoding.EncodeToString(data)

// list payments
func ListPayments() {

	url := "https://api.helloasso.com/v3/payments.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// list organization's payments
func ListOrganizationPayments() {

	url := "https://api.helloasso.com/v3/organizations/000000249671/payments.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// list campaign's payments
func ListCampaignPayments() {

	url := "https://api.helloasso.com/v3/organizations/000000249671/campaigns/000000026934/payments.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// list credit payments
func ListCreditPayments() {

	url := "https://api.helloasso.com/v3/payments.json?type=CREDIT"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// list payments created after 01/01/2018 and before 31/01/2018
func ListPaymentsByDate() {

	url := "https://api.helloasso.com/v3/payments.json?from=2018-01-01T00:00:00&to=2018-01-31T00:00:00"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// get payment detail
func GetPaymentDetail() {

	url := "https://api.helloasso.com/v3/payments/000017607661.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}