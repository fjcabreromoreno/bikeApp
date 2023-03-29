import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
} from '@mui/material';

export const CustomDialog = ({
  isOpen,
  handleClose,
  handleExit,
  summary,
  buttons,
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogContent>
        <DialogContentText
          dangerouslySetInnerHTML={{ __html: summary }}
        ></DialogContentText>
        {buttons.map((button, index) => {
          return (
            <Button
              key={index}
              color="primary"
              onClick={() => {
                handleClose();
                if (handleExit) {
                  handleExit(index);
                }
              }}
            >
              {button}
            </Button>
          );
        })}
      </DialogContent>
    </Dialog>
  );
};

CustomDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  summary: PropTypes.string.isRequired,
  button: PropTypes.string,
  avatar: PropTypes.string,
};
