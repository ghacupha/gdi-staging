import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntity, deleteEntity } from './customer-id-document-type.reducer';

export const CustomerIDDocumentTypeDeleteDialog = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams<'id'>();

  const [loadModal, setLoadModal] = useState(false);

  useEffect(() => {
    dispatch(getEntity(id));
    setLoadModal(true);
  }, []);

  const customerIDDocumentTypeEntity = useAppSelector(state => state.customerIDDocumentType.entity);
  const updateSuccess = useAppSelector(state => state.customerIDDocumentType.updateSuccess);

  const handleClose = () => {
    navigate('/customer-id-document-type' + location.search);
  };

  useEffect(() => {
    if (updateSuccess && loadModal) {
      handleClose();
      setLoadModal(false);
    }
  }, [updateSuccess]);

  const confirmDelete = () => {
    dispatch(deleteEntity(customerIDDocumentTypeEntity.id));
  };

  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="customerIDDocumentTypeDeleteDialogHeading">
        Confirm delete operation
      </ModalHeader>
      <ModalBody id="gdiStagingApp.standardsCustomerIdDocumentType.delete.question">
        Are you sure you want to delete Customer ID Document Type {customerIDDocumentTypeEntity.id}?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp; Cancel
        </Button>
        <Button id="jhi-confirm-delete-customerIDDocumentType" data-cy="entityConfirmDeleteButton" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp; Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomerIDDocumentTypeDeleteDialog;
