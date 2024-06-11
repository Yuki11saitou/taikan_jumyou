class ResultsController < ApplicationController
  def result
    # パラメータがない場合やゼロの場合はトップページにリダイレクト
    if params[:current_age].nil? || params[:final_age].nil? || params[:current_age].to_i.zero? || params[:final_age].to_i.zero?
      redirect_to root_path
      return
    end


    current_age = params[:current_age].to_i.to_f
    final_age = params[:final_age].to_i.to_f
    # 計算ロジックをここに追加します
    @lifespan = (final_age - current_age).round(1)
    # @lifespan_progress_rate = (current_age/final_age) * 100

    @perceived_lifespan = (current_age * (Math.log10(final_age / current_age))).round(1)
    # @perceived_lifespan_progress_rate = ( current_age / final_age ) * 100

    # 結果を表示するビューをレンダリングします
    render "result"
  end
end