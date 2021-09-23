import { gql } from "apollo-server";

export const typeDefs = gql`
  type CustomerBalanceGetResponse{
    asset_id: Int
    balance: Float
  }
  type LogCustomerDetailResponse{
    _id: String
    req_id: String
    ref_id: String
    customer_id: String
    enterprise_id: String
    asset_id: Float
    amount: Float
    fee_enterprise: Float
    txid: String
    req_time: Date
    create_date: Date
    status: Float
    action: String
  }

  type Query {
    sdk_user_balance_get(customer_id: String!): CustomerBalanceGetResponse
    sdk_enterprise_asset_address_get(asset_id: Int!): String
  }

  type Mutation {
    sdk_customer_withdraw(customer_id: String!, asset_id: Number!, amount: Number!, req_id: String!, req_time: Number!, address: String, action: String)
  }

  type Subscription {
    userSub: String
  }
`;
