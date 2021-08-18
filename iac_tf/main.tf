terraform {
  backend "remote" {
    organization = "amr205"

    workspaces {
      name = "MyDoaWorkspace"
    }
  }
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 2.65"
    }
  }
  required_version = ">= 0.14.9"
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg-doa-tffff" {
  name     = "rg-doa-tffff"
  location = "westus"
}