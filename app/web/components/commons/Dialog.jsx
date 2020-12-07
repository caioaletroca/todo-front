import React from "react";
import Button from "@material-ui/core/Button";
import { default as MaterialDialog } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

/**
 * A Standard dialog for confirmation events
 * @param  {[type]} options.open        [description]
 * @param  {[type]} options.title       [description]
 * @param  {[type]} options.content     [description]
 * @param  {String} options.acceptLabel [description]
 * @param  {String} options.cancelLabel [description]
 * @param  {[type]} options.onAccept    [description]
 * @param  {[type]} options.onCancel    [description]
 * @return {[type]}                     [description]
 */
const Dialog = ({
  open,
  title,
  content,
  acceptLabel = "Aceitar",
  cancelLabel = "Cancelar",
  onAccept,
  onCancel,
}) => (
  <MaterialDialog open={open} onClose={onCancel}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{content}</DialogContent>
    <DialogActions>
      <Button onClick={onCancel} color="primary">
        {cancelLabel}
      </Button>
      <Button onClick={onAccept} color="primary" autoFocus>
        {acceptLabel}
      </Button>
    </DialogActions>
  </MaterialDialog>
);

export default Dialog;