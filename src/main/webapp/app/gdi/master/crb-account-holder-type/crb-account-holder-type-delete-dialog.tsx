import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntity, deleteEntity } from './crb-account-holder-type.reducer';

export const CrbAccountHolderTypeDeleteDialog = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams<'id'>();

  const [loadModal, setLoadModal] = useState(false);

  useEffect(() => {
    dispatch(getEntity(id));
    setLoadModal(true);
  }, []);

  const crbAccountHolderTypeEntity = useAppSelector(state => state.crbAccountHolderType.entity);
  const updateSuccess = useAppSelector(state => state.crbAccountHolderType.updateSuccess);

  const handleClose = () => {
    navigate('/crb-account-holder-type' + location.search);
  };

  useEffect(() => {
    if (updateSuccess && loadModal) {
      handleClose();
      setLoadModal(false);
    }
  }, [updateSuccess]);

  const confirmDelete = () => {
    dispatch(deleteEntity(crbAccountHolderTypeEntity.id));
  };

  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="crbAccountHolderTypeDeleteDialogHeading">
        Confirm delete operation
      </ModalHeader>
      <ModalBody id="gdiStagingApp.crbAccountHolderType.delete.question">
        Are you sure you want to delete Crb Account Holder Type {crbAccountHolderTypeEntity.id}?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp; Cancel
        </Button>
        <Button id="jhi-confirm-delete-crbAccountHolderType" data-cy="entityConfirmDeleteButton" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp; Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CrbAccountHolderTypeDeleteDialog;
