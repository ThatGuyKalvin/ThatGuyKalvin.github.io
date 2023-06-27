variable "app_name" {
  description = "Name of the app"
  type        = string
  default     = "portfolio"
}

variable "environment_name" {
  description = "Name of the environment"
  type        = string
  default     = "Development"
  validation {
    # Ensure that the value of environment_name is one of the allowed values
    condition     = contains(["Development", "Staging", "Production"], var.environment_name)
    error_message = "Invalid environment name. Allowed values are Development, Staging, or Production."
  }
}

variable "subscription_id" {
  description = "The ID of the subscription"
  type        = string
  default     = "7b9eb5fd-c877-42bc-8078-0978a90c8102"
}

variable "tenant_id" {
  description = "The ID of the tenant"
  type        = string
  default     = "0b1f6f01-7828-4714-b57d-14e13841c8a6"
}

variable "location" {
  description = "Azure region where the resources will be deployed"
  type        = string
  default     = "East US"
}

locals {
  # Mapping of environment_name to environment_short_name
  environment_short_names = {
    Development = "dev"  # Default short name for Development environment
    Staging     = "stg"  # Default short name for Staging environment
    Production  = "prd"  # Default short name for Production environment
  }

  # Set environment_short_name based on environment_name
  environment_short_name = lookup(local.environment_short_names, var.environment_name, "dev")
}