package organizations

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

// list organizations
func ListOrganizations() {

	url := "https://api.helloasso.com/v3/organizations.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// get organizations detail
func GetOrganizationDetail() {

	url := "https://api.helloasso.com/v3/organizations/000000249671.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}