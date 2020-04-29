import React,{Component} from 'react';
import "./registration.css"
class Registration extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
 }
  onChange =(e)=>{
    // console.log(e.target)
    var name=e.target.name;
    var value=e.target.value;
    this.setState({
      [name]:value
    })
  }
  render(){
  return (
      <div className="container">
          <div className="registration">
            <h1 className="size32">Đăng Ký Nhận Giải Cứu</h1>
            <form>
                <div className="form-group">
                    <label >Tên</label>
                    <input type="text" className="form-control" placeholder="Tên của bạn"></input>
                </div>
                <div className="form-group">
                    <label >Địa chỉ</label>
                    <input type="text" className="form-control" placeholder="Địa chỉ của bạn"></input>
                </div>
                <div className="form-group">
                    <label >Số Điện Thoại</label>
                    <input type="text" className="form-control" placeholder="Số điện thoại của bạn" pattern="[0-9]{10}" title="số 10 ký tự"></input>
                </div>
                <div className="form-group">
                    <label >Chủ Đề</label>
                    <select class="form-control">
                        <option selected>Nông Sản</option>
                        <option value="1">Động Vật</option>
                        <option value="2">Người Vô Gia Cư</option>
                    </select>
                </div>
                <div className="form-group">
                    <label >Mô Tả</label>
                    <textarea ></textarea>
                </div>
                <div class="form-check">
                    <input type="checkbox" className="form-check-input" ></input>
                    <label className="form-check-label" >chấp nhận mọi yêu cầu</label>
                </div>
                
                    <button type="submit" class="btn btn-primary">Gửi Đăng Ký</button>
                </form>
          </div>
            
      </div>
    
    )
    }
}

export default Registration;
