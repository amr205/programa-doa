import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";
import * as containerservice from "@pulumi/azure-native/containerservice";

// Create an Azure Resource Group
const resourceGroup = new resources.ResourceGroup("pulumiRG");


