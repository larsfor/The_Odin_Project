require "test_helper"

class PopupstimsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get popupstims_index_url
    assert_response :success
  end
end
