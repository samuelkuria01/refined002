require "test_helper"

class MenControllerTest < ActionDispatch::IntegrationTest
  setup do
    @man = men(:one)
  end

  test "should get index" do
    get men_url, as: :json
    assert_response :success
  end

  test "should create man" do
    assert_difference("Man.count") do
      post men_url, params: { man: { description: @man.description, image: @man.image, name: @man.name, price: @man.price } }, as: :json
    end

    assert_response :created
  end

  test "should show man" do
    get man_url(@man), as: :json
    assert_response :success
  end

  test "should update man" do
    patch man_url(@man), params: { man: { description: @man.description, image: @man.image, name: @man.name, price: @man.price } }, as: :json
    assert_response :success
  end

  test "should destroy man" do
    assert_difference("Man.count", -1) do
      delete man_url(@man), as: :json
    end

    assert_response :no_content
  end
end
