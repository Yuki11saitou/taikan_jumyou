module ApplicationHelper
  def flash_background_color(type)
    case type.to_sym
    when :notice then "bg-yellow-500"
    when :alert  then "bg-pink-500"
    when :error  then "bg-red-500"
    else "bg-gray-500"
    end
  end
end