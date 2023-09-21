import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntity, deleteEntity } from './crb-credit-application-status.reducer';

export const CrbCreditApplicationStatusDeleteDialog = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams<'id'>();

  const [loadModal, setLoadModal] = useState(false);

  useEffect(() => {
    dispatch(getEntity(id));
    setLoadModal(true);
  }, []);

  const crbCreditApplicationStatusEntity = useAppSelector(state => state.crbCreditApplicationStatus.entity);
  const updateSuccess = useAppSelector(state => state.crbCreditApplicationStatus.updateSuccess);

  const handleClose = () => {
    navigate('/crb-credit-application-status' + location.search);
  };

  useEffect(() => {
    if (updateSuccess && loadModal) {
      handleClose();
      setLoadModal(false);
    }
  }, [updateSuccess]);

  const confirmDelete = () => {
    dispatch(deleteEntity(crbCreditApplicationStatusEntity.id));
  };

  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="crbCreditApplicationStatusDeleteDialogHeading">
        Confirm delete operation
      </ModalHeader>
      <ModalBody id="gdiStagingApp.crbCreditApplicationStatus.delete.question">
        Are you sure you want to delete Crb Credit Application Status {crbCreditApplicationStatusEntity.id}?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp; Cancel
        </Button>
        <Button
          id="jhi-confirm-delete-crbCreditApplicationStatus"
          data-cy="entityConfirmDeleteButton"
          color="danger"
          onClick={confirmDelete}
        >
          <FontAwesomeIcon icon="trash" />
          &nbsp; Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CrbCreditApplicationStatusDeleteDialog;
