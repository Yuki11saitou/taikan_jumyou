class ResultsController < ApplicationController
  def result
    current_age = params[:current_age].to_i
    expected_age = params[:expected_age].to_i
    # 計算ロジックをここに追加します
    @remaining_years = expected_age - current_age

    # 結果を表示するビューをレンダリングします

  end
end