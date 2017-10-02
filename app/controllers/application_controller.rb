class ApplicationController < ActionController::Base
  include SessionsHelper
  helper_method :current_order

  def current_order
    if !session[:order_id].nil?
      @order = Order.find(session[:order_id])
    else
      @order = Order.create
      session[:order_id] = @order.id
    end
    return @order
  end
end
