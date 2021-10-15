import { gql } from "@apollo/client";

export const ORDER = gql` 
  query{
    FetchOrderById(orderId: "48465491") {
      success
      message
      order {
        businessName
        products {
          attachment
          title
        }
        currency
        amount
      }
    }
  }
`;

export const LINK = gql`
  mutation SendText($phone: String!,  $country: String!) {
    AppLink(phone: $phone, country: $country) {
      code
      success
      message
    }
  }
`;