// File: ReadMore.js

import React, { useState } from 'react';
import './App.css';

function ReadMore() {
  const [showMore, setShowMore] = useState(true); // Sử dụng true để hiển thị nút lần đầu tiên

  // Hàm xử lý sự kiện khi nhấn vào nút "Read more"
  const handleReadMoreClick = () => {
    setShowMore(false); // Ẩn nút "Read more" khi được nhấp
  };

  return (
    <div>
      <div className='button-promotions'>
        {showMore && ( // Chỉ render nút nếu showMore là true
          <button onClick={handleReadMoreClick} className='btn-promotions'>Read more</button>
        )}
        
      </div>
      {!showMore && ( 
        <div className='cauhoi'>
<hr className="HorizontalLines-readmore" />
            <div>
          <h2>GrabFood có cung cấp dịch vụ giao đồ ăn 24x7 không?</h2>
          <p>Chúng tôi chỉ biết một điều duy nhất, đó là "đồ ăn", vậy nên tất nhiên chúng tôi cung cấp dịch vụ này rồi. Xin lưu ý, mặc dù chúng tôi là đối tác giao đồ ăn phục vụ 24x7, nhưng một số nhà hàng trong danh mục của chúng tôi có thể hạn chế giao đồ ăn khuya hoặc có thể không phục vụ đối với các đơn đặt hàng. Tuy nhiên, chúng tôi đã liệt kê danh sách những nhà hàng phục vụ nhu cầu ăn khuya của bạn trong mục Late Night Delivery (Giao hàng khuya).</p>
          <hr className="HorizontalLines-readmore" />
        </div>

        <div>
          <h2>GrabFood có chấp nhận tiền mặt không?</h2>
          <p>Tất nhiên là có! GrabFood chấp nhận mọi hình thức thanh toán cho dịch vụ giao đồ ăn, bao gồm cả tiền mặt khi giao hàng tại Việt Nam.</p>
          <hr className="HorizontalLines-readmore" />
        </div>

        <div>
          <h2>Tôi có thể thanh toán trực tuyến trên GrabFood cho đơn hàng của mình không?</h2>
          <p>GrabFood chấp nhận nhiều hình thức thanh toán cho các đơn đặt đồ ăn trực tuyến, bao gồm cả thanh toán trực tuyến tại Việt Nam bằng thẻ tín dụng, thẻ ghi nợ, PayPal hoặc trả tiền lúc nhận hàng. Hãy nhớ sử dụng <a href="https://www.grab.com/vn/pay/">Moca</a> để tích điểm thưởng mà bạn có thể sử dụng để được giảm giá cho đơn hàng tiếp theo và cho các dịch vụ khác của Grab nhé.</p>
          <hr className="HorizontalLines-readmore" />
        </div>

        <div>
          <h2>Tôi có thể đặt đồ ăn trên GrabFood cho người khác không?</h2>
          <p>Phí giao hàng của chúng tôi phụ thuộc vào nhiều yếu tố hoạt động như khoảng cách từ vị trí của bạn đến nhà hàng. Bạn có thể kiểm tra phí giao hàng chính xác cần phải trả trước khi thanh toán tại mục thanh toán trên ứng dụng Grab. Ngoài ra còn có phần “Free Delivery” (Giao hàng miễn phí) liệt kê các nhà hàng gần chỗ bạn mà không tính phí giao hàng.</p>
          <hr className="HorizontalLines-readmore" />
        </div>

        <div>
          <h2>Những nhà hàng nào được liệt kê trong GrabFood?</h2>
          <p>Chúng tôi có gì trên GrabFood? Chúng tôi tự hào có nhiều nhà hàng và món ăn nhất so với bất kỳ ứng dụng giao đồ ăn nào ở Việt Nam. Bạn có thể lựa chọn trong số hàng nghìn nhà hàng trên GrabFood Việt Nam. Bạn có thể đặt đồ ăn trực tuyến từ tất cả các điểm ăn uống yêu thích của Burger King, Jollibee, KFC, McDonalds, Long John Silver, Pastamania, Dominos Pizza, Pizza Hut, Subway!</p>
          <p>GrabFood cũng có mã khuyến mãi, ưu đãi và giảm giá có hạn dành riêng cho các nhà hàng trong danh mục. Bạn có thể được hưởng chiết khấu lớn và hàng loạt ưu đãi khác cho đơn đặt đồ ăn của mình. Giờ thì đặt đồ ăn thôi!</p>
          <hr className="HorizontalLines-readmore" />
        </div>


        <div>
          <h2>GrabFood có áp dụng giá trị đơn hàng tối thiểu không?</h2>
          <p>Có! Nhưng bạn có thể trả số tiền chênh lệch nếu giá trị đơn hàng của bạn nhỏ hơn số tiền đặt hàng tối thiểu.</p>
          <hr className="HorizontalLines-readmore" />
        </div>
        </div>
      )}
    </div>
  );
}

export default ReadMore;
