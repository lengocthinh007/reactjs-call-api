import React, { Component } from 'react';
class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Danh mục sản phẩm</h3>
        </div>
        <div className="panel-body">

          <table className="table table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>

        </div>
      </div>

    );
  }
}

export default ProductList;
