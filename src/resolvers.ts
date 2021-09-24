import { brickSDK_v2 } from "./BrickSDK";
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
type LogHistoryResponse = {
  data: [LogCustomerDetail]
  totalItems: number
}
enum LogHistoryAction {
  all = `all`
}
enum SortType {
  newest = 'newest',
  oldest = `oldest`
}
export const resolvers = {
  Query: {
    sdk_user_balance_get: async (parent: any, args: any, ctx: any) => {
      const { customer_id } = args as { customer_id: string}
      const { apikey } = ctx.req.headers
      checkMissing({customer_id, apikey})
      const brick_v2 = await brickSDK_v2(apikey);
      const res = await brick_v2.customerBalanceGet(customer_id) as {asset_id: number, balance: number};
      return res
    },
    sdk_enterprise_asset_address_get: async (parent: any, args: any, ctx: any) => {
      const { asset_id } = args as {asset_id: number}
      const { apikey } = ctx.req.headers
      checkMissing({ asset_id, apikey })
      const brick_v2 = await brickSDK_v2(apikey);
      const res = await brick_v2.enterpriseAddressGet(asset_id) as String;
      return res
    },
    sdk_user_log_customer_history_get: async (parent: any, args: any, ctx: any) => {
      const { customer_id, action = null, sort = null, pageNumber = null, pageSize = null } = args as {customer_id: String, action?: 'all', sort?: 'newest'|'oldest', pageNumber?: Number, pageSize?: Number }
      const { apikey } = ctx.req.headers
      checkMissing({ customer_id, apikey })
      const brick_v2 = await brickSDK_v2(apikey);
      const res = await brick_v2.logCustomerHistoryGet(customer_id, action, sort, pageNumber, pageSize) as LogHistoryResponse;
      return res
    },
  },
  Mutation: {
    sdk_customer_withdraw: async (parent: any, args: any, ctx: any) => {
      const {customer_id, asset_id, amount, req_id, req_time, address} = args as {
        customer_id: String, asset_id: Number, amount: Number, req_id: String, req_time: Number, address: String
      }
      const { apikey } = ctx.req.headers
      checkMissing({customer_id, asset_id, amount, req_id, req_time, apikey})
      const brick_v2 = await brickSDK_v2(apikey);
      const res = await brick_v2.customerWithdraw(customer_id, asset_id, amount, req_id, req_time, address) as LogCustomerDetail;
      return res
    },
    sdk_customer_exchange: async (parent: any, args: any, ctx: any) => {
      const {customer_id, from_asset_id, to_asset_id, from_amount, to_amount, req_id, req_time, action} = args as {
        customer_id: String,from_asset_id: Number,to_asset_id: Number,from_amount: Number,to_amount: Number,req_id: String,req_time: Number,action?: String
      }
      const { apikey } = ctx.req.headers
      checkMissing({customer_id, from_asset_id, to_asset_id, from_amount, to_amount, req_id, req_time, apikey})
      const brick_v2 = await brickSDK_v2(apikey);
      const res = await brick_v2.customerExchange(customer_id, from_asset_id, to_asset_id, from_amount, to_amount, req_id, req_time, action) as LogCustomerDetail;
      return res
    },
    sdk_customer_change_balance: async (parent: any, args: any, ctx: any) => {
      const {customer_id, asset_id, amount, req_id, req_time, action} = args as {
        customer_id: String, asset_id: Number, amount: Number, req_id: String, req_time: Number, action: String
      }
      const { apikey } = ctx.req.headers
      checkMissing({customer_id, asset_id, amount, req_id, req_time, action, apikey})
      const brick_v2 = await brickSDK_v2(apikey);
      const res = await brick_v2.customerChangeBalance(customer_id, asset_id, amount, req_id, req_time, action) as LogCustomerDetail;
      return res
    },
    sdk_customer_transfer: async (parent: any, args: any, ctx: any) => {
      const {sender_id, receiver_id, asset_id, receiver_enterprise_id, amount, req_id, req_time, action} = args as {
        sender_id: String,receiver_id:String,asset_id: Number,amount: Number,req_id: String,req_time: Number,receiver_enterprise_id: String,action?: String
      }
      const { apikey } = ctx.req.headers
      checkMissing({sender_id, receiver_id, asset_id, amount, req_id,req_time, apikey})
      const brick_v2 = await brickSDK_v2(apikey);
      const res = await brick_v2.customerTransfer(sender_id,receiver_id,asset_id,amount,req_id,req_time,receiver_enterprise_id,action) as LogCustomerDetail;
      return res
    },
  }
};
