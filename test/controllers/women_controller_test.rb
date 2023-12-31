require "test_helper"

class WomenControllerTest < ActionDispatch::IntegrationTest
  setup do
    @woman = women(:one)
  end

  test "should get index" do
    get women_url, as: :json
    assert_response :success
  end

  test "should create woman" do
    assert_difference("Woman.count") do
      post women_url, params: { woman: { description: @woman.description, image: @woman.image, name: @woman.name, price: @woman.price } }, as: :json
    end

    assert_response :created
  end

  test "should show woman" do
    get woman_url(@woman), as: :json
    assert_response :success
  end

  test "should update woman" do
    patch woman_url(@woman), params: { woman: { description: @woman.description, image: @woman.image, name: @woman.name, price: @woman.price } }, as: :json
    assert_response :success
  end

  test "should destroy woman" do
    assert_difference("Woman.count", -1) do
      delete woman_url(@woman), as: :json
    end

    assert_response :no_content
  end
end
