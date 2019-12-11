import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Button, Confirm, Icon } from 'semantic-ui-react';

import { FETCH_POSTS_QUERY } from '../../util/graphql'; 

function DeleteButton({ postId, callback }) {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deletePost] = useMutation(DELETE_POST_MUTATION, {
        variables: { postId },
        update(proxy) {
            setConfirmOpen(false);
            // remove post form cache
            
            const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY
            });
            const resPosts = data.getPosts.filter(p => p.id !== postId);
            proxy.writeQuery({
                query: FETCH_POSTS_QUERY,
                data: { getPosts: [...resPosts] }
            });
            if(callback) callback();
        },
        
    }); 
    return (
        <>
            <Button
                as="div"
                color="yellow"
                floated="right"
                onClick={() => setConfirmOpen(true)}
            >
                <Icon name="trash" style={{ margin: 0 }} />
            </Button>
            <Confirm
                open={confirmOpen}
                onCancel={() => setConfirmOpen(false)}
                onConfirm={deletePost}
            />
        </>
    );
};

const DELETE_POST_MUTATION = gql`
    mutation deletePost($postId: ID!) {
        deletePost(postId: $postId)
    }
`;

export default DeleteButton;