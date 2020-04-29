import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';
import Axios from "axios";


class categoryList extends Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false,
      items: [],
      error: {},
      limit: 15,
      totalPage: 0,
      users: [],
    }
  }

  loadCategoryList = () => {
    fetch('http://127.0.0.1:8000/api/category', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  };

  componentDidMount() {
    this.loadCategoryList();
  }


  deleteCategory = (event, category) => {
    if (!window.confirm("Xác nhận xóa danh mục\n [" + category.cate_name + "]")) {
      return;
    }
    fetch('http://127.0.0.1:8000/api/category/' + category.id, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      },
    ).then(
      (result) => {
        this.loadCategoryList()
      },
    ).catch(
      result => {
        if (result.response !== undefined) {
        } else {
          throw result;
        }
      }
    );
  };

  render() {
    let {items, isLoaded} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="animated fadeIn">
          <Link to={"/SpeciesCategory/create"}>
            <Button color="primary" className={"mb-3"}>
              <i className="fa fa-lightbulb-o">{''}</i>&nbsp;Tạo mới
            </Button>
          </Link>
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Quản lý Danh mục chủng loại
                </CardHeader>
                <CardBody>
                  <Row className={"mb-3"}>
                  </Row>
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Tên danh mục</th>
                      <th scope="col">Mô tả</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((category, index) => {
                      return <tr key={index}>
                        <td>{category.id}</td>
                        <td>{category.cate_name}</td>
                        <td>{category.cate_description}</td>
                        <td>
                          <span><Button size="sm" color="ghost-danger"><i
                            className="fa fa-times"/> {category.cate_status === 1 ? "Public" : "private"}</Button></span>
                        </td>
                        <td>
                          <Link to={"/SpeciesCategory/" + category.id} className={"edit-button"}><Button size="sm"
                                                                                                         color="ghost-primary"><i
                            className="fa fa-pencil"/> sửa</Button></Link>
                          <span onClick={event => this.deleteCategory(event, category)}
                                id={category.id}><Button size="sm" color="ghost-danger"><i className="fa fa-times"/> xóa</Button></span>
                        </td>
                      </tr>
                    })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )
    }
  }
}

export default categoryList;
