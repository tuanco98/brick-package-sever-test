import { checkMissing } from "./utils";

type LogCustomerDetail = {
  _id: String
  req_id: String
  ref_id: String
  customer_id: String
  enterprise_id: String
  asset_id: Number
  amount: Number
  fee_enterprise: Number
  txid: String
  req_time: Date
  create_date: Date
  status: Number
  action: String
}
export const resolvers = {
  Query: {
    sdk_user_balance_get: (parent: any, args: any) => {
      const { customer_id } = args as { customer_id: string}
      checkMissing({ customer_id })
      return
    },
    sdk_enterprise_asset_address_get: (parent: any, args: any) => {
      const { asset_id } = args as {asset_id: number}
      checkMissing({ asset_id })
      return
    },
  },
  Mutation: {
    sdk_customer_withdraw: (parent: any, args: any) => {
      const {customer_id, asset_id, amount, req_id, req_time, address, action} = args as {
        customer_id: String, asset_id: Number, amount: Number, req_id: String, req_time: Number, address: String, action: String
      }
      checkMissing({customer_id, asset_id, amount, req_id, req_time})
      return
    },
    sdk_customer_exchange: (parent: any, args: any) => {
      const {customer_id, from_asset_id, to_asset_id, from_amount, to_amount, req_id, req_time, action} = args as {
        customer_id: String,from_asset_id: Number,to_asset_id: Number,from_amount: Number,to_amount: Number,req_id: String,req_time: Number,action: String
      }
      checkMissing({customer_id, from_asset_id, to_asset_id, from_amount, to_amount, req_id, req_time})
      return
    },
    sdk_customer_change_balance: (parent: any, args: any) => {
      const {customer_id, asset_id, amount, req_id, req_time, action} = args as {
        customer_id: String, asset_id: Number, amount: Number, req_id: String, req_time: Number, action: String
      }
      checkMissing({customer_id, asset_id, amount, req_id, req_time})
      return
    },
    sdk_customer_transfer: (parent: any, args: any) => {
      const {sender_id, receiver_id, asset_id, receiver_enterprise_id, amount, req_id, req_time, action} = args as {
        sender_id: String,receiver_id:String,asset_id: Number,amount: Number,req_id: String,req_time: Number,receiver_enterprise_id: String,action: String
      }
      checkMissing({sender_id, receiver_id, asset_id, receiver_enterprise_id, amount, req_id})
      return
    },
  },
  Subscription: {
    userSub: () => {
      return "OK";
    },
  },
};
