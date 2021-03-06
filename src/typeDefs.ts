import { gql } from "apollo-server";

export const typeDefs = gql`
  scalar Date
  type AssetBalanceResponse {
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
  type LogHistoryResponse {
    data: [LogCustomerDetailResponse]
    totalItems: Int
  }
  enum SortType {
    newest
    oldest
  }
  enum LogHistoryAction {
    all
  }
  type Query {
    sdk_user_balance_get(customer_id: String!): [AssetBalanceResponse]
    sdk_enterprise_asset_address_get(asset_id: Int!): String
    sdk_user_log_customer_history_get(customer_id: String!,action: LogHistoryAction, sort: SortType, pageNumber: Int, pageSize: Int): LogHistoryResponse
  }

  type Mutation {
    sdk_customer_withdraw(customer_id: String!, asset_id: Int!, amount: Float!, req_id: String!, req_time: Float!, address: String): LogCustomerDetailResponse
    sdk_customer_exchange(customer_id: String!,from_asset_id: Int!,to_asset_id: Int!,from_amount: Float!,to_amount: Float!,req_id: String!,req_time: Float!,action: String): [LogCustomerDetailResponse]
    sdk_customer_change_balance(customer_id: String!, asset_id: Int!, amount: Float!, req_id: String!, req_time: Float!, action: String!): LogCustomerDetailResponse
    sdk_customer_transfer(sender_id: String!,receiver_id:String!,asset_id: Int!,amount: Float!,req_id: String!,req_time: Float!,receiver_enterprise_id: String,action: String): [LogCustomerDetailResponse]
  }
`;
