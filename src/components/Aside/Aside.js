import React from 'react';
import './Aside.css'
import SwipeImages from './SwipeImages';
import rain from './rain.jpg'
import star from './star.jpg'
class Aside extends React.Component { 
     
    render() {
        return (
            <div className="aside">



<div class="container" >
  <div class="item item1" style={{position: 'relative', top:'20px'}} >
    <SwipeImages/>
    </div>
  <div class="item item2" style={{position: 'relative', top:'80px', textAlign: 'center'}} >
  
                    Mưa!<br></br>
                    Tí tách, tí tách<br></br>
                    Buồn!<br></br>
                    Lệ rơi, lệ rơi<br></br>
                    Tâm từ tàn tạ tình tan tác<br></br>
                    Hoa trôi man mác lệ thêm sầu</div>
  <div class="item item3">
    <img style={{ width: '270px', height: '260px', position: 'relative', right:'15px' }} alt='rain' src={rain}/>
  </div>
  <div class="item item4" style={{ textAlign: 'justify', position: 'relative', paddingLeft:'8px', paddingRight:'30px'}}>
                <p>  khi ta ngắm nhìn sao trên bầu trời, những ngôi sao xa lắc, xa lơ, xa đến nỗi 
                     khi ánh sáng từ ngôi sao đó truyền tới mắt ta thì có lẽ nó đã tắt hàng tỉ năm về trước,
                     vậy nên ngắm nhìn sao cũng như đang nhìn về quá khứ, tình cảm đôi khi người ta giấu kín đến mức
                     khi người ta yêu quý nhận ra thì nó đã không còn nguyên vẹn như trước nữa...
                </p>
 
     <div class="item item5">
         <img style={{ width: '270px', height: '260px', position: 'relative', right: '8px'}} alt='star' src={star}/>
     </div>
</div>



</div>
</div>

        );
    }
}

export default Aside;