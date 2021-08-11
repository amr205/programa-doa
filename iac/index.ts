import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";
import * as containerservice from "@pulumi/azure-native/containerservice";
import * as azuread from "@pulumi/azuread";


// Create an Azure Resource Group
const resourceGroupName = "doaRG"
const resourceGroup = new resources.ResourceGroup(resourceGroupName);

// Create an Azure resource (Storage Account)
const storageAccount = new storage.StorageAccount("sa", {
    resourceGroupName: resourceGroup.name,
    sku: {
        name: storage.SkuName.Standard_LRS,
    },
    kind: storage.Kind.StorageV2,
});

// Export the primary key of the Storage Account
const storageAccountKeys = pulumi.all([resourceGroup.name, storageAccount.name]).apply(([resourceGroupName, accountName]) =>
    storage.listStorageAccountKeys({ resourceGroupName, accountName }));

const managedCluster = new containerservice.ManagedCluster("managedCluster", {
    addonProfiles: {},
    agentPoolProfiles: [{
        count: 2,
        enableNodePublicIP: true,
        mode: "System",
        name: "nodepool1",
        osType: "Linux",
        type: "VirtualMachineScaleSets",
        vmSize: "standard_b2s",
    }],
    dnsPrefix:"doaAks",
    location: "westus",
    networkProfile: {
        loadBalancerProfile: {
            managedOutboundIPs: {
                count: 2,
            },
        },
        loadBalancerSku: "standard",
        outboundType: "loadBalancer",
    },
    servicePrincipalProfile: {
        clientId: "3339ef72-1ee6-439a-8277-30202848d40d",
        secret: "-0hGYjS1-0L8Jq~JgFMF8IC9LN1jf7B-~6",
    },
    resourceGroupName: resourceGroup.name,
    resourceName: "aksClusterDoa",
    sku: {
        name: "Basic",
        tier: "Free",
    },
    tags: {
        archv2: "",
        tier: "production",
    }
});

export const primaryStorageKey = storageAccountKeys.keys[0].value;
export const azurePortalAksFQDN = managedCluster.azurePortalFQDN;
export const azureAksFQDN = managedCluster.fqdn;
