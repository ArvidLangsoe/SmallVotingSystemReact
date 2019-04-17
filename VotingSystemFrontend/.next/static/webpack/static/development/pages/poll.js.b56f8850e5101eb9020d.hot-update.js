webpackHotUpdate("static\\development\\pages\\poll.js",{

/***/ "./pages/poll.js":
/*!***********************!*\
  !*** ./pages/poll.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ "./node_modules/react-bootstrap/ProgressBar.js");
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__);










var Poll = function Poll(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-1546973005"
  }, props.poll.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1546973005"
  }, props.poll.description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1546973005" + " " + "vote-result"
  }, props.poll.voteCounts.map(function (voteCount) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-1546973005" + " " + "vote-option-result"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
      className: "jsx-1546973005"
    }, voteCount.option), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      now: voteCount.count * 100 / props.poll.totalVotes,
      label: "".concat(voteCount.count)
    }));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: "",
    className: "jsx-1546973005"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1546973005" + " " + "vote-box"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1546973005"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    className: "jsx-1546973005"
  }, "Vote now!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default.a.Group, {
    controlId: "name"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default.a.Label, null, "Your name:"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default.a.Control, {
    type: "text",
    placeholder: "Name"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default.a.Group, {
    controlId: "voteOption"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default.a.Label, null, "Option"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default.a.Control, {
    as: "select"
  }, props.poll.options.map(function (option) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      value: option,
      className: "jsx-1546973005"
    }, option);
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "primary",
    type: "submit"
  }, "Vote!")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1546973005"
  }, ".vote-box.jsx-1546973005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:400px;border:2px solid #ddd;border-radius:10px;padding:10px;}.vote-result.jsx-1546973005{max-width:500px;margin-bottom:20px;}.vote-option-result.jsx-1546973005{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWtsXFxzb3VyY2VcXHJlcG9zXFxWb3RpbmdTeXN0ZW1cXFZvdGluZ1N5c3RlbUZyb250ZW5kXFxwYWdlc1xccG9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGdCLEFBR29CLEFBVUcsQUFLRyxnQkFKQSxHQUtyQixnQkFKQSx1Q0FYcUIscUVBQ0UscUdBQ1MsbUhBQ2QsZ0JBQ00sc0JBQ0gsbUJBQ04sYUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXGFrbFxcc291cmNlXFxyZXBvc1xcVm90aW5nU3lzdGVtXFxWb3RpbmdTeXN0ZW1Gcm9udGVuZFxccGFnZXNcXHBvbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Byb2dyZXNzQmFyJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5cclxuXHJcblxyXG5jb25zdCBQb2xsID0gcHJvcHMgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8aDE+e3Byb3BzLnBvbGwudGl0bGV9PC9oMT5cclxuICAgIDxwPntwcm9wcy5wb2xsLmRlc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGUtcmVzdWx0XCI+XHJcbiAgICAgIHtwcm9wcy5wb2xsLnZvdGVDb3VudHMubWFwKHZvdGVDb3VudCA9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZS1vcHRpb24tcmVzdWx0XCI+XHJcbiAgICAgICAgICA8aDU+e3ZvdGVDb3VudC5vcHRpb259PC9oNT5cclxuICAgICAgICAgIDxQcm9ncmVzc0JhciBub3c9e3ZvdGVDb3VudC5jb3VudCAqIDEwMCAvIHByb3BzLnBvbGwudG90YWxWb3Rlc30gbGFiZWw9e2Ake3ZvdGVDb3VudC5jb3VudH1gfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDxGb3JtPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGUtYm94XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoND5Wb3RlIG5vdyE8L2g0PlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cIm5hbWVcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+WW91ciBuYW1lOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwidm90ZU9wdGlvblwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb248L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgYXM9XCJzZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5wb2xsLm9wdGlvbnMubWFwKG9wdGlvbiA9PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtvcHRpb259PntvcHRpb259PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiICB0eXBlPVwic3VibWl0XCI+Vm90ZSE8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvRm9ybT5cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgLnZvdGUtYm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudm90ZS1yZXN1bHQge1xyXG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC52b3RlLW9wdGlvbi1yZXN1bHR7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9MYXlvdXQ+XHJcbilcclxuXHJcblBvbGwuaGFuZGxlU3VibWl0PSBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcclxuICBcclxuICBmZXRjaCgnL2FwaS9mb3JtLXN1Ym1pdC11cmwnLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcblBvbGwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDQzMTAvYXBpL3BvbGwvJHtpZH1gKVxyXG4gIGNvbnN0IHBvbGwgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7cG9sbC50aXRsZX1gKVxyXG5cclxuICByZXR1cm4geyBwb2xsIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9sbCJdfQ== */\n/*@ sourceURL=C:\\Users\\akl\\source\\repos\\VotingSystem\\VotingSystemFrontend\\pages\\poll.js */"));
};

Poll.handleSubmit =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            data = new FormData(event.target);
            isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('/api/form-submit-url', {
              method: 'POST',
              body: data
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

Poll.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
    var id, res, poll;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = context.query.id;
            _context2.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("http://localhost:44310/api/poll/".concat(id));

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return res.json();

          case 6:
            poll = _context2.sent;
            console.log("Fetched show: ".concat(poll.title));
            return _context2.abrupt("return", {
              poll: poll
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Poll);

/***/ })

})
//# sourceMappingURL=poll.js.b56f8850e5101eb9020d.hot-update.js.map