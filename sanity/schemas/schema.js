import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "harold-myer",
  types: schemaTypes.concat([
    {
      title: "Company Info",
      name: "companyInfo",
      description: "This is where you edit information about Harold Myers Inc.",
      type: "document",
      fields: [
        {
          title: "Phone Number",
          description:
            "Your phone number; it will display exactly as you enter it, so include hyphens for readability",
          name: "phoneNumber",
          type: "string"
        },
        {
          title: "Fax Number",
          description:
            "Your fax number; it will display exactly as you enter it, so include hyphens for readability",
          name: "faxNumber",
          type: "string"
        },
        {
          title: "Email Address",
          description: "Your email address",
          name: "emailAddress",
          type: "string"
        },
        {
          title: "Address",
          description: "Your address",
          name: "address",
          type: "string"
        },
        {
          title: "Hours",
          description: "Your hours of operation",
          name: "hours",
          type: "string"
        },
        {
          title: "Facebook Link",
          description:
            "The link to your facebook page. Be sure to enter the link exactly without any extra characters, otherwise it won't redirect to the right page",
          name: "facebookLink",
          type: "string"
        }
      ]
    },
    {
      title: "Fuel Type Information",
      name: "fuelType",
      description:
        "The name, price, and info about a type of fuel you offer. If both price and info are excluded, the listing will be hidden on your website",
      type: "object",
      fields: [
        {
          title: "Fuel Name",
          description: "The title for this type of fuel",
          name: "fuelName",
          type: "string"
        },
        {
          title: "Fuel Price",
          description:
            "The price of this type of fuel. It will display exactly as entered, so make sure to include $ signs, decimals, etc. This field can be left empty if you only want to display info about this fuel type instead",
          name: "fuelPrice",
          type: "string"
        },
        {
          title: "Fuel Info",
          description:
            "Any info or comments you want to make about this fuel type. This field can be left empty if you only want to display the fuel price",
          name: "fuelInfo",
          type: "string"
        }
      ]
    },
    {
      title: "Fuel List",
      description: "The list of fuel types you currently offer",
      type: "document",
      name: "fuelList",
      fields: [
        {
          title: "Current Options",
          description:
            "The list of fuel types and their prices and info that you currently offer",
          name: "currentOptions",
          type: "array",
          of: [{ type: "fuelType" }]
        },
        {
          title: "As of Date",
          description: "The most recent date the prices have been updated",
          name: "asOfDate",
          type: "date",
          dateFormat: "M-D-YYYY"
        }
      ]
    },
    {
      title: "Customer Testimonial",
      description: "A testimonial made by one of your customers",
      name: "customerTestimonial",
      type: "object",
      fields: [
        {
          title: "Name",
          description: "The customer's name",
          name: "name",
          type: "string"
        },
        {
          title: "Location",
          description: "The town or area where the customer lives",
          name: "location",
          type: "string"
        },
        {
          title: "Testimonial Quote",
          description:
            "A quote from the customer describing their satisfaction with your business",
          name: "testimonialQuote",
          type: "string"
        }
      ]
    },
    {
      title: "Testimonial List",
      description:
        "A list of all of the customer testimonials you want to appear on the testimonials page",
      name: "testimonialList",
      type: "document",
      fields: [
        {
          title: "Testimonials",
          description:
            "A list of all of the customer testimonials you want to appear on the testimonials page",
          name: "testimonials",
          type: "array",
          of: [{ type: "customerTestimonial" }]
        }
      ]
    },
    {
      title: "Prepay Form",
      description: "The prepay that will be available on the site",
      name: "prepayForm",
      type: "document",
      fields: [
        {
          title: "Form",
          description: "The prepay that will be available on the site",
          name: "form",
          type: "file"
        }
      ]
    },
    {
      title: "Service Contract",
      description: "The service contract for your services page",
      name: "serviceContract",
      type: "document",
      fields: [
        {
          title: "Contract",
          description: "Your service contract",
          name: "contract",
          type: "file"
        }
      ]
    }
  ])
});
