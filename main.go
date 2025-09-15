package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("."))
	http.Handle("/", fs)

	fmt.Println("Server starting on http://0.0.0.0:1990")
	log.Fatal(http.ListenAndServe("0.0.0.0:1990", nil))
}