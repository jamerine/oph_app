class Api::V1::OrdersController < Api::V1::ApiController

  def create
    @order = Order.create(order_params)
    render json: @order
  end


  private

  def order_params
    params.require(:order).permit(:billing_address_line_1, :billing_address_line_2, :billing_city, :billing_email, :billing_first_name, :billing_last_name, :billing_phone_number, :billing_state, :billing_zip_code, :order_status_id, :subtotal, :tax, :total)
  end
end