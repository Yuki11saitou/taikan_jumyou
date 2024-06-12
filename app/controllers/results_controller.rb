class ResultsController < ApplicationController
  def result
    current_age = params[:current_age].to_i.to_f
    final_age = params[:final_age].to_i.to_f

    # パラメータがゼロ、未入力の場合はトップページにリダイレクト
    if current_age.zero? || final_age.zero? || current_age.nil? || final_age.nil?
      redirect_to root_path, alert: "予期せぬ値が入力されました"
      return
    # 現在の年齢が最後の年齢よりも大きい場合はトップページにリダイレクト
    elsif current_age > final_age
      redirect_to root_path, notice: "現在の年齢が最後の年齢よりも大きいです"
      return
    end

    # 計算ロジックをここに追加します
    @lifespan = (final_age - current_age).round(1)
    # @lifespan_progress_rate = (current_age/final_age) * 100

    @perceived_lifespan = (current_age * (Math.log10(final_age / current_age))).round(1)
    # @perceived_lifespan_progress_rate = ( current_age / final_age ) * 100

    # 結果を表示するビューをレンダリングします
    # render "result"
  end
end