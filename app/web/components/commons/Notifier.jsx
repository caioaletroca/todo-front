import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

// Actions
import { snackBarActions } from "core/actions";

// Selectors
import { getSnackBar } from "core/selectors";

let displayed = [];

/**
 * Handles all the snack notification system
 * @param {*} param0
 */
export default function Notifier() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const ViewActions = {
    close: bindActionCreators(snackBarActions.close, dispatch),
    remove: bindActionCreators(snackBarActions.remove, dispatch),
  };
  const notification = useSelector(getSnackBar);

  const storeDisplayed = (id) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  React.useEffect(() => {
    Object.values(notification).forEach(
      ({ key, message, options = {}, dismissed = false }) => {
        if (dismissed) {
          // dismiss snackbar using notistack
          closeSnackbar(key);
          return;
        }

        // Do nothing if snackbar is already displayed
        if (displayed.includes(key)) return;

        // Display snackbar using notistack
        enqueueSnackbar(message, {
          key,
          ...options,
          onClose: (event, reason, myKey) => {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: (event, reason, key) => {
            ViewActions.remove({ key });
            removeDisplayed(key);
          },
        });

        // keep track of snackbars that we've displayed
        storeDisplayed(key);
      }
    );
  }, [notification]);

  return null;
}