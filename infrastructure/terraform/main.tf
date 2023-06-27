# Define your Azure provider
provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}

resource "azurerm_resource_group" "resource_group" {
  name     = "${var.app_name}-${local.environment_short_name}-rg"
  location = var.location
}

resource "azurerm_storage_account" "storage_account" {
  name                     = format("%s%ssa", var.app_name, local.environment_short_name)
  resource_group_name      = azurerm_resource_group.resource_group.name
  location                 = azurerm_resource_group.resource_group.location

  account_tier              = "Standard"
  account_replication_type  = "GRS"
  enable_https_traffic_only = true

  static_website {
    index_document = "index.html"
    error_404_document = "index.html"
  }
}