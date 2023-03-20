import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../app/api/apiSlice';

const permissionsAdapter = createEntityAdapter({});

const initialState = permissionsAdapter.getInitialState();

export const permissionsApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		updatePermission: builder.mutation({
			query: initialPermissionData => ({
				url: '/permission',
				method: 'PATCH',
				body: {
					...initialPermissionData,
				},
			}),
			invalidatesTags: (result, error, arg) => [
				{ type: 'Permission', id: arg.id },
			],
		}),
	}),
});

export const { useUpdatePermissionMutation } = permissionsApiSlice;
