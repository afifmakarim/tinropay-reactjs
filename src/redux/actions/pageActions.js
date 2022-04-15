import api from "../../config/api";
import { FETCH_PAGE, FETCH_DETAIL } from "../types";

export const fetchPage = (url) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_PAGE,
      payload: {
        isLoading: true,
        products: false,
        error: false,
      },
    });

    api
      .get(url)
      .then((response) => {
        dispatch({
          type: FETCH_PAGE,
          payload: {
            isLoading: false,
            products: response.data.data,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_PAGE,
          payload: {
            isLoading: false,
            products: false,
            error: true,
            errorMsg: error,
          },
        });
      });
  };
};

// export const fetchDetail = (url) => {
//   return (dispatch) => {
//     dispatch({
//       type: FETCH_DETAIL,
//       payload: {
//         isLoading: true,
//       },
//     });

//     api
//       .get(url)
//       .then((response) => {
//         dispatch({
//           type: FETCH_DETAIL,
//           payload: {
//             isLoading: false,
//             products: response.data.data,
//             error: false,
//           },
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch({
//           type: FETCH_PAGE,
//           payload: {
//             isLoading: false,
//             error: true,
//             errorMsg: error,
//           },
//         });
//       });
//   };
// };

export const fetchDetail = (url) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DETAIL,
      payload: {
        isLoading: true,
        products: false,
      },
    });

    const detailData = await api.get(url);

    dispatch({
      type: FETCH_DETAIL,
      payload: {
        isLoading: false,
        products: detailData.data.data,
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_DETAIL,
      payload: {
        isLoading: false,
        error: error,
      },
    });
  }
};
