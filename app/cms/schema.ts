// @ts-nocheck

export interface paths {
  '/assets/{id}': {
    /** Image typed files can be dynamically resized and transformed to fit any need. */
    get: operations['getAsset']
  }
  '/auth/login': {
    /** Retrieve a Temporary Access Token */
    post: operations['login']
  }
  '/auth/refresh': {
    /** Refresh a Temporary Access Token. */
    post: operations['refresh']
  }
  '/auth/logout': {
    /** Log Out */
    post: operations['logout']
  }
  '/auth/password/request': {
    /** Request a reset password email to be send. */
    post: operations['passwordRequest']
  }
  '/auth/password/reset': {
    /** The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password. */
    post: operations['passwordReset']
  }
  '/auth/oauth': {
    /** List configured OAuth providers. */
    get: operations['oauth']
  }
  '/auth/oauth/{provider}': {
    /** Start OAuth flow using the specified provider */
    get: operations['oauthProvider']
  }
  '/extensions/interfaces': {
    /** List all installed custom interfaces. */
    get: operations['getInterfaces']
  }
  '/extensions/layouts': {
    /** List all installed custom layouts. */
    get: operations['getLayouts']
  }
  '/extensions/displays': {
    /** List all installed custom displays. */
    get: operations['getDisplays']
  }
  '/extensions/modules': {
    /** List all installed custom modules. */
    get: operations['getModules']
  }
  '/server/info': {
    /** Perform a system status check and return the options. */
    get: operations['serverInfo']
  }
  '/server/ping': {
    /** Ping, pong. Ping.. pong. */
    get: operations['ping']
  }
  '/utils/hash/generate': {
    /** Generate a hash for a given string. */
    post: operations['hash-generate']
  }
  '/utils/hash/verify': {
    /** Generate a hash for a given string. */
    post: operations['hash-verify']
  }
  '/utils/sort/{collection}': {
    /** Re-sort items in collection based on start and to value of item */
    post: operations['sort']
  }
  '/utils/import/{collection}': {
    /** Import multiple records from a JSON or CSV file into a collection. */
    post: operations['import']
  }
  '/utils/export/{collection}': {
    /** Export a larger data set to a file in the File Library */
    post: operations['export']
  }
  '/utils/cache/clear': {
    /** Resets both the data and schema cache of Directus. */
    post: operations['clear-cache']
  }
  '/utils/random/string': {
    /** Returns a random string of given length. */
    get: operations['random']
  }
  '/items/authors': {
    /** List the authors items. */
    get: operations['readItemsAuthors']
    /** Create a new authors item. */
    post: operations['createItemsAuthors']
  }
  '/items/authors/{id}': {
    /** Retrieve a single authors item by unique identifier. */
    get: operations['readSingleItemsAuthors']
    /** Delete an existing authors item. */
    delete: operations['deleteSingleItemsAuthors']
    /** Update an existing authors item. */
    patch: operations['updateSingleItemsAuthors']
  }
  '/items/authors_translations': {
    /** List the authors_translations items. */
    get: operations['readItemsAuthorsTranslations']
    /** Create a new authors_translations item. */
    post: operations['createItemsAuthorsTranslations']
  }
  '/items/authors_translations/{id}': {
    /** Retrieve a single authors_translations item by unique identifier. */
    get: operations['readSingleItemsAuthorsTranslations']
    /** Delete an existing authors_translations item. */
    delete: operations['deleteSingleItemsAuthorsTranslations']
    /** Update an existing authors_translations item. */
    patch: operations['updateSingleItemsAuthorsTranslations']
  }
  '/items/countries': {
    /** List the countries items. */
    get: operations['readItemsCountries']
    /** Create a new countries item. */
    post: operations['createItemsCountries']
  }
  '/items/countries/{id}': {
    /** Retrieve a single countries item by unique identifier. */
    get: operations['readSingleItemsCountries']
    /** Delete an existing countries item. */
    delete: operations['deleteSingleItemsCountries']
    /** Update an existing countries item. */
    patch: operations['updateSingleItemsCountries']
  }
  '/items/devices': {
    /** List the devices items. */
    get: operations['readItemsDevices']
    /** Create a new devices item. */
    post: operations['createItemsDevices']
  }
  '/items/devices/{id}': {
    /** Retrieve a single devices item by unique identifier. */
    get: operations['readSingleItemsDevices']
    /** Delete an existing devices item. */
    delete: operations['deleteSingleItemsDevices']
    /** Update an existing devices item. */
    patch: operations['updateSingleItemsDevices']
  }
  '/items/languages': {
    /** List the languages items. */
    get: operations['readItemsLanguages']
    /** Create a new languages item. */
    post: operations['createItemsLanguages']
  }
  '/items/languages/{id}': {
    /** Retrieve a single languages item by unique identifier. */
    get: operations['readSingleItemsLanguages']
    /** Delete an existing languages item. */
    delete: operations['deleteSingleItemsLanguages']
    /** Update an existing languages item. */
    patch: operations['updateSingleItemsLanguages']
  }
  '/items/networks': {
    /** List the networks items. */
    get: operations['readItemsNetworks']
    /** Create a new networks item. */
    post: operations['createItemsNetworks']
  }
  '/items/networks/{id}': {
    /** Retrieve a single networks item by unique identifier. */
    get: operations['readSingleItemsNetworks']
    /** Delete an existing networks item. */
    delete: operations['deleteSingleItemsNetworks']
    /** Update an existing networks item. */
    patch: operations['updateSingleItemsNetworks']
  }
  '/items/networks_translations': {
    /** List the networks_translations items. */
    get: operations['readItemsNetworksTranslations']
    /** Create a new networks_translations item. */
    post: operations['createItemsNetworksTranslations']
  }
  '/items/networks_translations/{id}': {
    /** Retrieve a single networks_translations item by unique identifier. */
    get: operations['readSingleItemsNetworksTranslations']
    /** Delete an existing networks_translations item. */
    delete: operations['deleteSingleItemsNetworksTranslations']
    /** Update an existing networks_translations item. */
    patch: operations['updateSingleItemsNetworksTranslations']
  }
  '/items/payments': {
    /** List the payments items. */
    get: operations['readItemsPayments']
    /** Create a new payments item. */
    post: operations['createItemsPayments']
  }
  '/items/payments/{id}': {
    /** Retrieve a single payments item by unique identifier. */
    get: operations['readSingleItemsPayments']
    /** Delete an existing payments item. */
    delete: operations['deleteSingleItemsPayments']
    /** Update an existing payments item. */
    patch: operations['updateSingleItemsPayments']
  }
  '/items/room_page_types': {
    /** List the room_page_types items. */
    get: operations['readItemsRoomPageTypes']
    /** Create a new room_page_types item. */
    post: operations['createItemsRoomPageTypes']
  }
  '/items/room_page_types/{id}': {
    /** Retrieve a single room_page_types item by unique identifier. */
    get: operations['readSingleItemsRoomPageTypes']
    /** Delete an existing room_page_types item. */
    delete: operations['deleteSingleItemsRoomPageTypes']
    /** Update an existing room_page_types item. */
    patch: operations['updateSingleItemsRoomPageTypes']
  }
  '/items/room_page_types_translations': {
    /** List the room_page_types_translations items. */
    get: operations['readItemsRoomPageTypesTranslations']
    /** Create a new room_page_types_translations item. */
    post: operations['createItemsRoomPageTypesTranslations']
  }
  '/items/room_page_types_translations/{id}': {
    /** Retrieve a single room_page_types_translations item by unique identifier. */
    get: operations['readSingleItemsRoomPageTypesTranslations']
    /** Delete an existing room_page_types_translations item. */
    delete: operations['deleteSingleItemsRoomPageTypesTranslations']
    /** Update an existing room_page_types_translations item. */
    patch: operations['updateSingleItemsRoomPageTypesTranslations']
  }
  '/items/room_pages': {
    /** List the room_pages items. */
    get: operations['readItemsRoomPages']
    /** Create a new room_pages item. */
    post: operations['createItemsRoomPages']
  }
  '/items/room_pages/{id}': {
    /** Retrieve a single room_pages item by unique identifier. */
    get: operations['readSingleItemsRoomPages']
    /** Delete an existing room_pages item. */
    delete: operations['deleteSingleItemsRoomPages']
    /** Update an existing room_pages item. */
    patch: operations['updateSingleItemsRoomPages']
  }
  '/items/room_types': {
    /** List the room_types items. */
    get: operations['readItemsRoomTypes']
    /** Create a new room_types item. */
    post: operations['createItemsRoomTypes']
  }
  '/items/room_types/{id}': {
    /** Retrieve a single room_types item by unique identifier. */
    get: operations['readSingleItemsRoomTypes']
    /** Delete an existing room_types item. */
    delete: operations['deleteSingleItemsRoomTypes']
    /** Update an existing room_types item. */
    patch: operations['updateSingleItemsRoomTypes']
  }
  '/items/room_types_translations': {
    /** List the room_types_translations items. */
    get: operations['readItemsRoomTypesTranslations']
    /** Create a new room_types_translations item. */
    post: operations['createItemsRoomTypesTranslations']
  }
  '/items/room_types_translations/{id}': {
    /** Retrieve a single room_types_translations item by unique identifier. */
    get: operations['readSingleItemsRoomTypesTranslations']
    /** Delete an existing room_types_translations item. */
    delete: operations['deleteSingleItemsRoomTypesTranslations']
    /** Update an existing room_types_translations item. */
    patch: operations['updateSingleItemsRoomTypesTranslations']
  }
  '/items/rooms': {
    /** List the rooms items. */
    get: operations['readItemsRooms']
    /** Create a new rooms item. */
    post: operations['createItemsRooms']
  }
  '/items/rooms/{id}': {
    /** Retrieve a single rooms item by unique identifier. */
    get: operations['readSingleItemsRooms']
    /** Delete an existing rooms item. */
    delete: operations['deleteSingleItemsRooms']
    /** Update an existing rooms item. */
    patch: operations['updateSingleItemsRooms']
  }
  '/items/rooms_countries': {
    /** List the rooms_countries items. */
    get: operations['readItemsRoomsCountries']
    /** Create a new rooms_countries item. */
    post: operations['createItemsRoomsCountries']
  }
  '/items/rooms_countries/{id}': {
    /** Retrieve a single rooms_countries item by unique identifier. */
    get: operations['readSingleItemsRoomsCountries']
    /** Delete an existing rooms_countries item. */
    delete: operations['deleteSingleItemsRoomsCountries']
    /** Update an existing rooms_countries item. */
    patch: operations['updateSingleItemsRoomsCountries']
  }
  '/items/rooms_devices': {
    /** List the rooms_devices items. */
    get: operations['readItemsRoomsDevices']
    /** Create a new rooms_devices item. */
    post: operations['createItemsRoomsDevices']
  }
  '/items/rooms_devices/{id}': {
    /** Retrieve a single rooms_devices item by unique identifier. */
    get: operations['readSingleItemsRoomsDevices']
    /** Delete an existing rooms_devices item. */
    delete: operations['deleteSingleItemsRoomsDevices']
    /** Update an existing rooms_devices item. */
    patch: operations['updateSingleItemsRoomsDevices']
  }
  '/items/rooms_payments': {
    /** List the rooms_payments items. */
    get: operations['readItemsRoomsPayments']
    /** Create a new rooms_payments item. */
    post: operations['createItemsRoomsPayments']
  }
  '/items/rooms_payments/{id}': {
    /** Retrieve a single rooms_payments item by unique identifier. */
    get: operations['readSingleItemsRoomsPayments']
    /** Delete an existing rooms_payments item. */
    delete: operations['deleteSingleItemsRoomsPayments']
    /** Update an existing rooms_payments item. */
    patch: operations['updateSingleItemsRoomsPayments']
  }
  '/items/rooms_translations': {
    /** List the rooms_translations items. */
    get: operations['readItemsRoomsTranslations']
    /** Create a new rooms_translations item. */
    post: operations['createItemsRoomsTranslations']
  }
  '/items/rooms_translations/{id}': {
    /** Retrieve a single rooms_translations item by unique identifier. */
    get: operations['readSingleItemsRoomsTranslations']
    /** Delete an existing rooms_translations item. */
    delete: operations['deleteSingleItemsRoomsTranslations']
    /** Update an existing rooms_translations item. */
    patch: operations['updateSingleItemsRoomsTranslations']
  }
  '/items/settings': {
    /** List the settings items. */
    get: operations['readItemsSettings']
    /** Create a new settings item. */
    post: operations['createItemsSettings']
  }
  '/items/settings/{id}': {
    /** Retrieve a single settings item by unique identifier. */
    get: operations['readSingleItemsSettings']
    /** Delete an existing settings item. */
    delete: operations['deleteSingleItemsSettings']
    /** Update an existing settings item. */
    patch: operations['updateSingleItemsSettings']
  }
  '/items/system': {
    /** List the system items. */
    get: operations['readItemsSystem']
    /** Create a new system item. */
    post: operations['createItemsSystem']
  }
  '/items/system/{id}': {
    /** Retrieve a single system item by unique identifier. */
    get: operations['readSingleItemsSystem']
    /** Delete an existing system item. */
    delete: operations['deleteSingleItemsSystem']
    /** Update an existing system item. */
    patch: operations['updateSingleItemsSystem']
  }
  '/activity': {
    /** Returns a list of activity actions. */
    get: operations['getActivities']
  }
  '/activity/comment': {
    /** Creates a new comment. */
    post: operations['createComment']
  }
  '/activity/{id}': {
    /** Retrieves the details of an existing activity action. Provide the primary key of the activity action and Directus will return the corresponding information. */
    get: operations['getActivity']
  }
  '/activity/comment/{id}': {
    /** Delete an existing comment. Deleted comments can not be retrieved. */
    delete: operations['deleteComment']
    /** Update the content of an existing comment. */
    patch: operations['updateComment']
  }
  '/collections': {
    /** Returns a list of the collections available in the project. */
    get: operations['getCollections']
    /** Create a new collection in Directus. */
    post: operations['createCollection']
  }
  '/collections/{id}': {
    /** Retrieves the details of a single collection. */
    get: operations['getCollection']
    /** Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution. */
    delete: operations['deleteCollection']
    /** Update an existing collection. */
    patch: operations['updateCollection']
  }
  '/fields': {
    /** Returns a list of the fields available in the project. */
    get: operations['getFields']
  }
  '/fields/{collection}': {
    /** Returns a list of the fields available in the given collection. */
    get: operations['getCollectionFields']
    /** Create a new field in a given collection. */
    post: operations['createField']
  }
  '/fields/{collection}/{id}': {
    /** Retrieves the details of a single field in a given collection. */
    get: operations['getCollectionField']
    /** Delete an existing field. */
    delete: operations['deleteField']
    /** Update an existing field. */
    patch: operations['updateField']
  }
  '/files': {
    /** List the files. */
    get: operations['getFiles']
    /** Create a new file */
    post: operations['createFile']
  }
  '/files/{id}': {
    /** Retrieve a single file by unique identifier. */
    get: operations['getFile']
    /** Delete an existing file. */
    delete: operations['deleteFile']
    /** Update an existing file, and/or replace it's file contents. */
    patch: operations['updateFile']
  }
  '/folders': {
    /** List the folders. */
    get: operations['getFolders']
    /** Create a new folder. */
    post: operations['createFolder']
  }
  '/folders/{id}': {
    /** Retrieve a single folder by unique identifier. */
    get: operations['getFolder']
    /** Delete an existing folder */
    delete: operations['deleteFolder']
    /** Update an existing folder */
    patch: operations['updateFolder']
  }
  '/permissions': {
    /** List all permissions. */
    get: operations['getPermissions']
    /** Create a new permission. */
    post: operations['createPermission']
  }
  '/permissions/me': {
    /** List the permissions that apply to the current user. */
    get: operations['getMyPermissions']
  }
  '/permissions/{id}': {
    /** Retrieve a single permissions object by unique identifier. */
    get: operations['getPermission']
    /** Delete an existing permission */
    delete: operations['deletePermission']
    /** Update an existing permission */
    patch: operations['updatePermission']
  }
  '/presets': {
    /** List the presets. */
    get: operations['getPresets']
    /** Create a new preset. */
    post: operations['createPreset']
  }
  '/presets/{id}': {
    /** Retrieve a single preset by unique identifier. */
    get: operations['getPreset']
    /** Delete an existing preset. */
    delete: operations['deletePreset']
    /** Update an existing preset. */
    patch: operations['updatePreset']
  }
  '/relations': {
    /** List the relations. */
    get: operations['getRelations']
    /** Create a new relation. */
    post: operations['createRelation']
  }
  '/relations/{id}': {
    /** Retrieve a single relation by unique identifier. */
    get: operations['getRelation']
    /** Delete an existing relation. */
    delete: operations['deleteRelation']
    /** Update an existing relation */
    patch: operations['updateRelation']
  }
  '/revisions': {
    /** List the revisions. */
    get: operations['getRevisions']
  }
  '/revisions/{id}': {
    /** Retrieve a single revision by unique identifier. */
    get: operations['getRevision']
  }
  '/roles': {
    /** List the roles. */
    get: operations['getRoles']
    /** Create a new role. */
    post: operations['createRole']
  }
  '/roles/{id}': {
    /** Retrieve a single role by unique identifier. */
    get: operations['getRole']
    /** Delete an existing role */
    delete: operations['deleteRole']
    /** Update an existing role */
    patch: operations['updateRole']
  }
  '/settings': {
    /** List the settings. */
    get: operations['getSettings']
    /** Update the settings */
    patch: operations['updateSetting']
  }
  '/users': {
    /** List the users. */
    get: operations['getUsers']
    /** Create a new user. */
    post: operations['createUser']
  }
  '/users/{id}': {
    /** Retrieve a single user by unique identifier. */
    get: operations['getUser']
    /** Delete an existing user */
    delete: operations['deleteUser']
    /** Update an existing user */
    patch: operations['updateUser']
  }
  '/users/invite': {
    /** Invites one or more users to this project. It creates a user with an invited status, and then sends an email to the user with instructions on how to activate their account. */
    post: operations['invite']
  }
  '/users/invite/accept': {
    /** Accepts and enables an invited user using a JWT invitation token. */
    post: operations['acceptInvite']
  }
  '/users/me': {
    /** Retrieve the currently authenticated user. */
    get: operations['getMe']
    /** Update the currently authenticated user. */
    patch: operations['updateMe']
  }
  '/users/me/track/page': {
    /** Updates the last used page field of the currently authenticated user. This is used internally to be able to open the Directus admin app from the last page you used. */
    patch: operations['updateLastUsedPageMe']
  }
  '/users/me/tfa/enable': {
    /** Enables two-factor authentication for the currently authenticated user. */
    post: operations['meTfaEnable']
  }
  '/users/me/tfa/disable': {
    /** Disables two-factor authentication for the currently authenticated user. */
    post: operations['meTfaDisable']
  }
  '/webhooks': {
    /** Get all webhooks. */
    get: operations['getWebhooks']
    /** Create a new webhook. */
    post: operations['createWebhook']
  }
  '/webhooks/{id}': {
    /** Retrieve a single webhook by unique identifier. */
    get: operations['getWebhook']
    /** Delete an existing webhook */
    delete: operations['deleteWebhook']
    /** Update an existing webhook */
    patch: operations['updateWebhook']
  }
  '/flows': {
    /** Get all flows. */
    get: operations['getFlows']
    /** Create a new flow. */
    post: operations['createFlow']
  }
  '/flows/{id}': {
    /** Retrieve a single flow by unique identifier. */
    get: operations['getFlow']
    /** Delete an existing flow */
    delete: operations['deleteFlow']
    /** Update an existing flow */
    patch: operations['updateFlow']
  }
  '/operations': {
    /** Get all operations. */
    get: operations['getOperations']
    /** Create a new operation. */
    post: operations['createOperation']
  }
  '/operations/{id}': {
    /** Retrieve a single operation by unique identifier. */
    get: operations['getOperation']
    /** Delete an existing operation */
    delete: operations['deleteOperation']
    /** Update an existing operation */
    patch: operations['updateOperation']
  }
}

export interface components {
  schemas: {
    ItemsAuthors: {
      id?: string
      name?: string
      translations?: (number | components['schemas']['ItemsAuthorsTranslations'])[]
    }
    ItemsAuthorsTranslations: {
      id?: number
      authors_id?: (string | components['schemas']['ItemsAuthors']) | null
      languages_code?: (string | components['schemas']['ItemsLanguages']) | null
      title?: string
    }
    ItemsCountries: {
      id?: string
      sort?: number | null
    }
    ItemsDevices: {
      id?: number
      sort?: number | null
      name?: string
    }
    ItemsLanguages: {
      code?: string
      name?: string
    }
    ItemsNetworks: {
      id?: string
      status?: string
      sort?: number | null
      user_created?: (string | components['schemas']['Users']) | null
      date_created?: string | null
      user_updated?: (string | components['schemas']['Users']) | null
      date_updated?: string | null
      name?: string
      logo?: string | components['schemas']['Files']
      slug?: string
      main_accordion?: string
      rooms?: (string | components['schemas']['ItemsRooms'])[]
      translations?: (number | components['schemas']['ItemsNetworksTranslations'])[]
      main_group?: string
    }
    ItemsNetworksTranslations: {
      id?: number
      networks_id?: (string | components['schemas']['ItemsNetworks']) | null
      languages_code?: (string | components['schemas']['ItemsLanguages']) | null
      title?: string
      main_accordion?: string
      main_group?: string
    }
    ItemsPayments: {
      id?: number
      sort?: number | null
      name?: string
    }
    ItemsRoomPageTypes: {
      id?: number
      sort?: number | null
      name?: string | null
      translations?: (number | components['schemas']['ItemsRoomPageTypesTranslations'])[]
    }
    ItemsRoomPageTypesTranslations: {
      id?: number
      room_page_types_id?: (number | components['schemas']['ItemsRoomPageTypes']) | null
      languages_code?: (string | components['schemas']['ItemsLanguages']) | null
      title?: string
    }
    ItemsRoomPages: {
      id?: number
      status?: string
      sort?: number | null
      user_created?: (string | components['schemas']['Users']) | null
      date_created?: string | null
      user_updated?: (string | components['schemas']['Users']) | null
      date_updated?: string | null
      content?: string
      author?: string | components['schemas']['ItemsAuthors']
      created?: string
      updated?: string
      type?: (number | components['schemas']['ItemsRoomPageTypes']) | null
      rooms_translation?: (number | components['schemas']['ItemsRoomsTranslations']) | null
      h1?: string
      meta_title?: string
      meta_description?: string
      toc_mode?: number | null
      main_accordion?: string
      settings_group?: string
      main_group?: string
      meta_group?: string
    }
    ItemsRoomTypes: {
      id?: number
      sort?: number | null
      name?: string
      translations?: (number | components['schemas']['ItemsRoomTypesTranslations'])[]
    }
    ItemsRoomTypesTranslations: {
      id?: number
      room_types_id?: (number | components['schemas']['ItemsRoomTypes']) | null
      languages_code?: (string | components['schemas']['ItemsLanguages']) | null
      title?: string | null
    }
    ItemsRooms: {
      id?: string
      status?: string
      sort?: number | null
      user_created?: (string | components['schemas']['Users']) | null
      date_created?: string | null
      user_updated?: (string | components['schemas']['Users']) | null
      date_updated?: string | null
      name?: string
      logo?: string | components['schemas']['Files']
      square_logo?: string | components['schemas']['Files']
      reliability?: string
      bonuses_promotions?: string
      game_selection?: string
      casual_players?: string
      software_convenience?: string
      deposits_withdrawals?: string
      license_country?: (string | components['schemas']['ItemsCountries']) | null
      network?: string | components['schemas']['ItemsNetworks']
      type?: number | components['schemas']['ItemsRoomTypes']
      slug?: string
      payments?: (number | components['schemas']['ItemsRoomsPayments'])[]
      additional_group?: string
      ratings_group?: string
      devices?: (number | components['schemas']['ItemsRoomsDevices'])[]
      main_gpoup?: string
      translations?: (number | components['schemas']['ItemsRoomsTranslations'])[]
      logos_group?: string
      accepted_countries?: (number | components['schemas']['ItemsRoomsCountries'])[]
      main_accordion?: string
    }
    ItemsRoomsCountries: {
      id?: number
      rooms_id?: (string | components['schemas']['ItemsRooms']) | null
      countries_id?: (string | components['schemas']['ItemsCountries']) | null
    }
    ItemsRoomsDevices: {
      id?: number
      rooms_id?: (string | components['schemas']['ItemsRooms']) | null
      devices_id?: (number | components['schemas']['ItemsDevices']) | null
    }
    ItemsRoomsPayments: {
      id?: number
      rooms_id?: (string | components['schemas']['ItemsRooms']) | null
      payments_id?: (number | components['schemas']['ItemsPayments']) | null
    }
    ItemsRoomsTranslations: {
      id?: number
      rooms_id?: (string | components['schemas']['ItemsRooms']) | null
      languages_code?: (string | components['schemas']['ItemsLanguages']) | null
      title?: string
      rakeback?: string
      deposit?: string
      max_bonus?: string
      bonus_code?: string | null
      key_facts?: string | null
      bonus?: string
      bonus_group?: string
      main_accordion?: string
      pages?: (number | components['schemas']['ItemsRoomPages'])[]
      main_group?: string
    }
    ItemsSettings: { [key: string]: any }
    ItemsSystem: { [key: string]: any }
    Activity: {
      /** Unique identifier for the object. */
      id?: number
      /** Action that was performed. */
      action?: 'create' | 'update' | 'delete' | 'login'
      /** The user who performed this action. */
      user?: (string | components['schemas']['Users']) | null
      /** When the action happened. */
      timestamp?: string
      /** The IP address of the user at the time the action took place. */
      ip?: string
      /** User agent string of the browser the user used when the action took place. */
      user_agent?: string
      /** Collection identifier in which the item resides. */
      collection?: string | components['schemas']['Collections']
      /** Unique identifier for the item the action applied to. This is always a string, even for integer primary keys. */
      item?: string
      /** User comment. This will store the comments that show up in the right sidebar of the item edit page in the admin app. */
      comment?: string | null
      revisions?: (number | components['schemas']['Revisions'])[]
    }
    Collections: {
      /** The collection key. */
      collection?: string
      icon?: string | null
      note?: string | null
      display_template?: string | null
      hidden?: boolean
      singleton?: boolean
      translations?: string[] | null
      archive_field?: string | null
      archive_app_filter?: boolean
      archive_value?: string | null
      unarchive_value?: string | null
      sort_field?: string | null
      accountability?: string | null
      color?: string | null
      item_duplication_fields?: string[] | null
      sort?: number | null
      group?: (string | components['schemas']['Collections']) | null
      collapse?: string
      collection_divider?: string
      archive_divider?: string
      sort_divider?: string
      accountability_divider?: string
      duplication_divider?: string
    }
    Fields: {
      id?: number
      /** Unique name of the collection this field is in. */
      collection?: string
      /** Unique name of the field. Field name is unique within the collection. */
      field?: string
      special?: string[] | null
      interface?: string | null
      options?: string[] | null
      display?: string | null
      display_options?: string[] | null
      readonly?: boolean
      hidden?: boolean
      sort?: number | null
      width?: string | null
      translations?: string[] | null
      note?: string | null
      conditions?: string[] | null
      required?: boolean | null
      group?: (number | components['schemas']['Fields']) | null
      validation?: string[] | null
      validation_message?: string | null
    }
    Files: {
      /** Unique identifier for the file. */
      id?: string
      /** Where the file is stored. Either `local` for the local filesystem or the name of the storage adapter (for example `s3`). */
      storage?: string
      /** Name of the file on disk. By default, Directus uses a random hash for the filename. */
      filename_disk?: string
      /** How you want to the file to be named when it's being downloaded. */
      filename_download?: string
      /** Title for the file. Is extracted from the filename on upload, but can be edited by the user. */
      title?: string
      /** MIME type of the file. */
      type?: string
      /** Virtual folder where this file resides in. */
      folder?: (string | components['schemas']['Folders']) | null
      /** Who uploaded the file. */
      uploaded_by?: string | components['schemas']['Users']
      /** When the file was uploaded. */
      uploaded_on?: string
      modified_by?: (string | components['schemas']['Users']) | null
      modified_on?: string
      /** Character set of the file. */
      charset?: string | null
      /** Size of the file in bytes. */
      filesize?: number
      /** Width of the file in pixels. Only applies to images. */
      width?: number | null
      /** Height of the file in pixels. Only applies to images. */
      height?: number | null
      /** Duration of the file in seconds. Only applies to audio and video. */
      duration?: number | null
      /** Where the file was embedded from. */
      embed?: string | null
      /** Description for the file. */
      description?: string | null
      /** Where the file was created. Is automatically populated based on EXIF data for images. */
      location?: string | null
      /** Tags for the file. Is automatically populated based on EXIF data for images. */
      tags?: string[] | null
      /** IPTC, EXIF, and ICC metadata extracted from file */
      metadata?: { [key: string]: any } | null
      storage_divider?: string
    }
    Folders: {
      /** Unique identifier for the folder. */
      id?: string
      /** Name of the folder. */
      name?: string
      /** Unique identifier of the parent folder. This allows for nested folders. */
      parent?: (string | components['schemas']['Folders']) | null
    }
    Permissions: {
      /** Unique identifier for the permission. */
      id?: number
      /** Unique identifier of the role this permission applies to. */
      role?: string | null
      /** What collection this permission applies to. */
      collection?: string
      /** What action this permission applies to. */
      action?: 'create' | 'read' | 'update' | 'delete'
      /** JSON structure containing the permissions checks for this permission. */
      permissions?: { [key: string]: any } | null
      /** JSON structure containing the validation checks for this permission. */
      validation?: { [key: string]: any } | null
      /** JSON structure containing the preset value for created/updated items. */
      presets?: { [key: string]: any } | null
      /** CSV of fields that the user is allowed to interact with. */
      fields?: string[] | null
    }
    Presets: {
      /** Unique identifier for this single collection preset. */
      id?: number
      /** Name for the bookmark. If this is set, the preset will be considered a bookmark. */
      bookmark?: string | null
      /** The unique identifier of the user to whom this collection preset applies. */
      user?: (string | components['schemas']['Users']) | null
      /** The unique identifier of a role in the platform. If `user` is null, this will be used to apply the collection preset or bookmark for all users in the role. */
      role?: (string | components['schemas']['Roles']) | null
      /** What collection this collection preset is used for. */
      collection?: string | components['schemas']['Collections']
      /** Search query. */
      search?: string | null
      /** Key of the layout that is used. */
      layout?: string
      /** Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters. */
      layout_query?: { [key: string]: any } | null
      /** Options of the views. The properties in here are controlled by the layout. */
      layout_options?: { [key: string]: any } | null
      refresh_interval?: number | null
      filter?: string[] | null
      icon?: string
      color?: string | null
    }
    Relations: {
      /** Unique identifier for the relation. */
      id?: number
      /** Collection that has the field that holds the foreign key. */
      many_collection?: string
      /** Foreign key. Field that holds the primary key of the related collection. */
      many_field?: string
      /** Collection on the _one_ side of the relationship. */
      one_collection?: string
      /** Alias column that serves as the _one_ side of the relationship. */
      one_field?: string | null
      one_collection_field?: string | null
      one_allowed_collections?: string[] | null
      /** Field on the junction table that holds the many field of the related relation. */
      junction_field?: string | null
      sort_field?: string | null
      one_deselect_action?: string
    }
    Revisions: {
      /** Unique identifier for the revision. */
      id?: number
      /** Unique identifier for the activity record. */
      activity?: number | components['schemas']['Activity']
      /** Collection of the updated item. */
      collection?: string | components['schemas']['Collections']
      /** Primary key of updated item. */
      item?: string
      /** Copy of item state at time of update. */
      data?: { [key: string]: any } | null
      /** Changes between the previous and the current revision. */
      delta?: { [key: string]: any }
      /** If the current item was updated relationally, this is the id of the parent revision record */
      parent?: number | null
    }
    Roles: {
      /** Unique identifier for the role. */
      id?: string
      /** Name of the role. */
      name?: string
      /** The role's icon. */
      icon?: string
      /** Description of the role. */
      description?: string | null
      /** Array of IP addresses that are allowed to connect to the API as a user of this role. */
      ip_access?: string[]
      /** Whether or not this role enforces the use of 2FA. */
      enforce_tfa?: boolean
      /** Admin role. If true, skips all permission checks. */
      admin_access?: boolean
      /** The users in the role are allowed to use the app. */
      app_access?: boolean
      users?: (string | components['schemas']['Users'])[]
    }
    Settings: {
      /** Unique identifier for the setting. */
      id?: number
      /** The name of the project. */
      project_name?: string
      /** The url of the project. */
      project_url?: string | null
      /** The brand color of the project. */
      project_color?: string | null
      /** The logo of the project. */
      project_logo?: string | null
      /** The foreground of the project. */
      public_foreground?: string | null
      /** The background of the project. */
      public_background?: string | null
      /** Note rendered on the public pages of the app. */
      public_note?: string | null
      /** Allowed authentication login attempts before the user's status is set to blocked. */
      auth_login_attempts?: number
      /** Authentication password policy. */
      auth_password_policy?: string | null
      /** What transformations are allowed in the assets endpoint. */
      storage_asset_transform?: ('all' | 'none' | 'presets') | null
      /** Array of allowed */
      storage_asset_presets?:
        | {
            /** Key for the asset. Used in the assets endpoint. */
            key?: string
            /** Whether to crop the thumbnail to match the size, or maintain the aspect ratio. */
            fit?: 'cover' | 'contain' | 'inside' | 'outside'
            /** Width of the thumbnail. */
            width?: number
            /** Height of the thumbnail. */
            height?: number
            /** No image upscale */
            withoutEnlargement?: boolean
            /** Quality of the compression used. */
            quality?: number
            /** Reformat output image */
            format?: '' | 'jpeg' | 'png' | 'webp' | 'tiff'
            /** Additional transformations to apply */
            transforms?:
              | {
                  /** The Sharp method name */
                  method?: string
                  /** A list of arguments to pass to the Sharp method */
                  arguments?:
                    | {
                        /** A JSON representation of the argument value */
                        argument?: string
                      }[]
                    | null
                }[]
              | null
          }[]
        | null
      custom_css?: string | null
      /** Default folder to place files */
      storage_default_folder?: string
      basemaps?: string[] | null
      mapbox_key?: string | null
      module_bar?: string[] | null
      project_descriptor?: string | null
      translation_strings?: string[] | null
      default_language?: string
      branding_divider?: string
      modules_divider?: string
      security_divider?: string
      files_divider?: string
      map_divider?: string
    }
    Users: {
      /** Unique identifier for the user. */
      id?: string
      /** First name of the user. */
      first_name?: string
      /** Last name of the user. */
      last_name?: string
      /** Unique email address for the user. */
      email?: string
      /** Password of the user. */
      password?: string
      /** The user's location. */
      location?: string | null
      /** The user's title. */
      title?: string | null
      /** The user's description. */
      description?: string | null
      /** The user's tags. */
      tags?: string[] | null
      /** The user's avatar. */
      avatar?: (string | components['schemas']['Files']) | null
      /** The user's language used in Directus. */
      language?: string
      /** What theme the user is using. */
      theme?: 'light' | 'dark' | 'auto'
      /** The 2FA secret string that's used to generate one time passwords. */
      tfa_secret?: string | null
      /** Status of the user. */
      status?: 'active' | 'invited' | 'draft' | 'suspended' | 'deleted'
      /** Unique identifier of the role of this user. */
      role?: string | components['schemas']['Roles']
      /** Static token for the user. */
      token?: string | null
      last_access?: string | null
      /** Last page that the user was on. */
      last_page?: string | null
      provider?: string
      external_identifier?: string | null
      auth_data?: string[] | null
      email_notifications?: boolean | null
      preferences_divider?: string
      admin_divider?: string
    }
    Webhooks: {
      /** The index of the webhook. */
      id?: number
      /** The name of the webhook. */
      name?: string
      /** Method used in the webhook. */
      method?: string
      /** The url of the webhook. */
      url?: string | null
      /** The status of the webhook. */
      status?: string
      /** If yes, send the content of what was done */
      data?: boolean
      /** The actions that triggers this webhook. */
      actions?: string[] | null
      collections?: string[]
      headers?: string[] | null
      triggers_divider?: string
    }
    Flows: {
      /** Unique identifier for the flow. */
      id?: string
      /** The name of the flow. */
      name?: string
      /** Icon displayed in the Admin App for the flow. */
      icon?: string
      /** Color of the icon displayed in the Admin App for the flow. */
      color?: string | null
      description?: string | null
      /** Current status of the flow. */
      status?: 'active' | 'inactive'
      /** Type of trigger for the flow. One of `hook`, `webhook`, `operation`, `schedule`, `manual`. */
      trigger?: string
      /** The permission used during the flow. One of `$public`, `$trigger`, `$full`, or UUID of a role. */
      accountability?: string
      /** Options of the selected trigger for the flow. */
      options?: { [key: string]: any } | null
      /** UUID of the operation connected to the trigger in the flow. */
      operation?: string | components['schemas']['Operations']
      /** Timestamp in ISO8601 when the flow was created. */
      date_created?: string | null
      /** The user who created the flow. */
      user_created?: string | components['schemas']['Users']
      operations?: (string | components['schemas']['Operations'])[]
    }
    Operations: {
      /** Unique identifier for the operation. */
      id?: string
      /** The name of the operation. */
      name?: string
      /** Key for the operation. Must be unique within a given flow. */
      key?: string
      /** Type of operation. One of `log`, `mail`, `notification`, `create`, `read`, `request`, `sleep`, `transform`, `trigger`, `condition`, or any type of custom operation extensions. */
      type?: string
      position_x?: number
      position_y?: number
      /** Options depending on the type of the operation. */
      options?: { [key: string]: any } | null
      /** The operation triggered when the current operation succeeds (or `then` logic of a condition operation). */
      resolve?: string | components['schemas']['Operations']
      /** The operation triggered when the current operation fails (or `otherwise` logic of a condition operation). */
      reject?: string | components['schemas']['Operations']
      flow?: string | components['schemas']['Flows']
      /** Timestamp in ISO8601 when the operation was created. */
      date_created?: string | null
      /** The user who created the operation. */
      user_created?: string | components['schemas']['Users']
    }
  }
  responses: {
    /** Error: Not found. */
    NotFoundError: {
      content: {
        'application/json': {
          error?: {
            code?: number
            message?: string
          }
        }
      }
    }
    /** Error: Unauthorized request */
    UnauthorizedError: {
      content: {
        'application/json': {
          error?: {
            code?: number
            message?: string
          }
        }
      }
    }
  }
  parameters: {
    /** Index */
    Id: number
    /** Unique identifier for the object. */
    UUId: string
    /** Collection of which you want to retrieve the items from. */
    Collection: string
    /** Filter by items that contain the given search query in one of their fields. */
    Search: string
    /** Cursor for use in pagination. Often used in combination with limit. */
    Page: number
    /** How many items to skip when fetching data. */
    Offset: number
    /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
    Sort: string[]
    /** What metadata to return in the response. */
    Meta: string
    /** A limit on the number of objects that are returned. */
    Limit: number
    /** Select items in collection by given conditions. */
    Filter: string[]
    /** Control what fields are being returned in the object. */
    Fields: string[]
    /** Controls if the API sets a cookie or returns a JWT on successful login. */
    Mode: 'jwt' | 'cookie'
  }
}

export interface operations {
  /** Image typed files can be dynamically resized and transformed to fit any need. */
  getAsset: {
    parameters: {
      path: {
        /** The id of the file. */
        id: string
      }
      query: {
        /** The key of the asset size configured in settings. */
        key?: string
        /** A JSON array of image transformations */
        transforms?: string
        /** Download the asset to your computer */
        download?: boolean
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'text/plain': string
        }
      }
      404: components['responses']['NotFoundError']
    }
  }
  /** Retrieve a Temporary Access Token */
  login: {
    responses: {
      /** Successful authentification */
      200: {
        content: {
          'application/json': {
            data?: {
              access_token?: string
              expires?: number
              refresh_token?: string
            }
          }
        }
      }
    }
    requestBody: {
      content: {
        'application/json': {
          /** Email address of the user you're retrieving the access token for. */
          email: string
          /** Password of the user. */
          password: string
          /** Choose between retrieving the token as a string, or setting it as a cookie. */
          mode?: 'json' | 'cookie'
          /** If 2FA is enabled, you need to pass the one time password. */
          otp?: string
        }
      }
    }
  }
  /** Refresh a Temporary Access Token. */
  refresh: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: {
              access_token?: string
              expires?: number
              refresh_token?: string
            }
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** JWT access token you want to refresh. This token can't be expired. */
          refresh_token?: string
        }
      }
    }
  }
  /** Log Out */
  logout: {
    responses: {
      /** Request successful */
      200: unknown
    }
    requestBody: {
      content: {
        'application/json': {
          /** JWT access token you want to logout. */
          refresh_token?: string
        }
      }
    }
  }
  /** Request a reset password email to be send. */
  passwordRequest: {
    responses: {
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Email address of the user you're requesting a reset for. */
          email: string
        }
      }
    }
  }
  /** The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password. */
  passwordReset: {
    responses: {
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** One-time use JWT token that is used to verify the user. */
          token: string
          /** New password for the user. */
          password: string
        }
      }
    }
  }
  /** List configured OAuth providers. */
  oauth: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            public?: boolean
            data?: string[]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Start OAuth flow using the specified provider */
  oauthProvider: {
    parameters: {
      path: {
        /** Key of the activated OAuth provider. */
        provider: string
      }
      query: {
        /** Where to redirect on successful login.<br/>If set the authentication details are set inside cookies otherwise a JSON is returned. */
        redirect?: string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            public?: boolean
            data?: {
              token?: string
            }
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** List all installed custom interfaces. */
  getInterfaces: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: { [key: string]: any }[]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** List all installed custom layouts. */
  getLayouts: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: { [key: string]: any }[]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** List all installed custom displays. */
  getDisplays: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: { [key: string]: any }[]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** List all installed custom modules. */
  getModules: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: { [key: string]: any }[]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Perform a system status check and return the options. */
  serverInfo: {
    parameters: {
      query: {
        /** The first time you create a project, the provided token will be saved and required for subsequent project installs. It can also be found and configured in `/config/__api.json` on your server. */
        super_admin_token: number
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: { [key: string]: any }
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Ping, pong. Ping.. pong. */
  ping: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/text': string
        }
      }
    }
  }
  /** Generate a hash for a given string. */
  'hash-generate': {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: string
          }
        }
      }
    }
    requestBody: {
      content: {
        'application/json': {
          /** String to hash. */
          string?: string
        }
      }
    }
  }
  /** Generate a hash for a given string. */
  'hash-verify': {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: boolean
          }
        }
      }
    }
    requestBody: {
      content: {
        'application/json': {
          /** String to hash. */
          string?: string
          /** Hash you want to verify against. */
          hash?: string
        }
      }
    }
  }
  /** Re-sort items in collection based on start and to value of item */
  sort: {
    parameters: {
      path: {
        /** Collection identifier */
        collection: string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
    }
    requestBody: {
      content: {
        'application/json': {
          /** Primary key of item to move */
          item?: number
          /** Primary key of item where to move the current item to */
          to?: number
        }
      }
    }
  }
  /** Import multiple records from a JSON or CSV file into a collection. */
  import: {
    parameters: {
      path: {
        /** Collection identifier */
        collection: string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
    }
    requestBody: {
      content: {
        'multipart/form-data': {
          file?: string
        }
      }
    }
  }
  /** Export a larger data set to a file in the File Library */
  export: {
    parameters: {
      path: {
        /** Collection identifier */
        collection: string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
    }
    requestBody: {
      content: {
        'application/json': {
          /** What file format to save the export to. One of csv, xml, json */
          format?: 'csv' | 'xml' | 'json'
          /** The query object to use for the export */
          query?: components['definitions']['Query']
          /** Partial file object to tweak where / how the export file is saved */
          file?: components['schemas']['Files']
        }
      }
    }
  }
  /** Resets both the data and schema cache of Directus. */
  'clear-cache': {
    responses: {
      /** Successful request */
      200: unknown
    }
  }
  /** Returns a random string of given length. */
  random: {
    parameters: {
      query: {
        /** Length of the random string. */
        length?: number
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: string
          }
        }
      }
    }
  }
  /** List the authors items. */
  readItemsAuthors: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsAuthors'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new authors item. */
  createItemsAuthors: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsAuthors'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsAuthors'][]
          | components['schemas']['ItemsAuthors']
      }
    }
  }
  /** Retrieve a single authors item by unique identifier. */
  readSingleItemsAuthors: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsAuthors']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing authors item. */
  deleteSingleItemsAuthors: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing authors item. */
  updateSingleItemsAuthors: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsAuthors']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsAuthors']
      }
    }
  }
  /** List the authors_translations items. */
  readItemsAuthorsTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsAuthorsTranslations'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new authors_translations item. */
  createItemsAuthorsTranslations: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsAuthorsTranslations'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsAuthorsTranslations'][]
          | components['schemas']['ItemsAuthorsTranslations']
      }
    }
  }
  /** Retrieve a single authors_translations item by unique identifier. */
  readSingleItemsAuthorsTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsAuthorsTranslations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing authors_translations item. */
  deleteSingleItemsAuthorsTranslations: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing authors_translations item. */
  updateSingleItemsAuthorsTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsAuthorsTranslations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsAuthorsTranslations']
      }
    }
  }
  /** List the countries items. */
  readItemsCountries: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsCountries'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new countries item. */
  createItemsCountries: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsCountries'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsCountries'][]
          | components['schemas']['ItemsCountries']
      }
    }
  }
  /** Retrieve a single countries item by unique identifier. */
  readSingleItemsCountries: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsCountries']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing countries item. */
  deleteSingleItemsCountries: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing countries item. */
  updateSingleItemsCountries: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsCountries']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsCountries']
      }
    }
  }
  /** List the devices items. */
  readItemsDevices: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsDevices'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new devices item. */
  createItemsDevices: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsDevices'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsDevices'][]
          | components['schemas']['ItemsDevices']
      }
    }
  }
  /** Retrieve a single devices item by unique identifier. */
  readSingleItemsDevices: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsDevices']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing devices item. */
  deleteSingleItemsDevices: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing devices item. */
  updateSingleItemsDevices: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsDevices']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsDevices']
      }
    }
  }
  /** List the languages items. */
  readItemsLanguages: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsLanguages'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new languages item. */
  createItemsLanguages: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsLanguages'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsLanguages'][]
          | components['schemas']['ItemsLanguages']
      }
    }
  }
  /** Retrieve a single languages item by unique identifier. */
  readSingleItemsLanguages: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsLanguages']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing languages item. */
  deleteSingleItemsLanguages: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing languages item. */
  updateSingleItemsLanguages: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsLanguages']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsLanguages']
      }
    }
  }
  /** List the networks items. */
  readItemsNetworks: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsNetworks'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new networks item. */
  createItemsNetworks: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsNetworks'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsNetworks'][]
          | components['schemas']['ItemsNetworks']
      }
    }
  }
  /** Retrieve a single networks item by unique identifier. */
  readSingleItemsNetworks: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsNetworks']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing networks item. */
  deleteSingleItemsNetworks: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing networks item. */
  updateSingleItemsNetworks: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsNetworks']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsNetworks']
      }
    }
  }
  /** List the networks_translations items. */
  readItemsNetworksTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsNetworksTranslations'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new networks_translations item. */
  createItemsNetworksTranslations: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsNetworksTranslations'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsNetworksTranslations'][]
          | components['schemas']['ItemsNetworksTranslations']
      }
    }
  }
  /** Retrieve a single networks_translations item by unique identifier. */
  readSingleItemsNetworksTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsNetworksTranslations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing networks_translations item. */
  deleteSingleItemsNetworksTranslations: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing networks_translations item. */
  updateSingleItemsNetworksTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsNetworksTranslations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsNetworksTranslations']
      }
    }
  }
  /** List the payments items. */
  readItemsPayments: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsPayments'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new payments item. */
  createItemsPayments: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsPayments'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsPayments'][]
          | components['schemas']['ItemsPayments']
      }
    }
  }
  /** Retrieve a single payments item by unique identifier. */
  readSingleItemsPayments: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsPayments']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing payments item. */
  deleteSingleItemsPayments: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing payments item. */
  updateSingleItemsPayments: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsPayments']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsPayments']
      }
    }
  }
  /** List the room_page_types items. */
  readItemsRoomPageTypes: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPageTypes'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new room_page_types item. */
  createItemsRoomPageTypes: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPageTypes'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsRoomPageTypes'][]
          | components['schemas']['ItemsRoomPageTypes']
      }
    }
  }
  /** Retrieve a single room_page_types item by unique identifier. */
  readSingleItemsRoomPageTypes: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPageTypes']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing room_page_types item. */
  deleteSingleItemsRoomPageTypes: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing room_page_types item. */
  updateSingleItemsRoomPageTypes: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPageTypes']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsRoomPageTypes']
      }
    }
  }
  /** List the room_page_types_translations items. */
  readItemsRoomPageTypesTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPageTypesTranslations'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new room_page_types_translations item. */
  createItemsRoomPageTypesTranslations: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPageTypesTranslations'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsRoomPageTypesTranslations'][]
          | components['schemas']['ItemsRoomPageTypesTranslations']
      }
    }
  }
  /** Retrieve a single room_page_types_translations item by unique identifier. */
  readSingleItemsRoomPageTypesTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPageTypesTranslations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing room_page_types_translations item. */
  deleteSingleItemsRoomPageTypesTranslations: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing room_page_types_translations item. */
  updateSingleItemsRoomPageTypesTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPageTypesTranslations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsRoomPageTypesTranslations']
      }
    }
  }
  /** List the room_pages items. */
  readItemsRoomPages: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPages'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new room_pages item. */
  createItemsRoomPages: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPages'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsRoomPages'][]
          | components['schemas']['ItemsRoomPages']
      }
    }
  }
  /** Retrieve a single room_pages item by unique identifier. */
  readSingleItemsRoomPages: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPages']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing room_pages item. */
  deleteSingleItemsRoomPages: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing room_pages item. */
  updateSingleItemsRoomPages: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomPages']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsRoomPages']
      }
    }
  }
  /** List the room_types items. */
  readItemsRoomTypes: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomTypes'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new room_types item. */
  createItemsRoomTypes: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomTypes'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsRoomTypes'][]
          | components['schemas']['ItemsRoomTypes']
      }
    }
  }
  /** Retrieve a single room_types item by unique identifier. */
  readSingleItemsRoomTypes: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomTypes']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing room_types item. */
  deleteSingleItemsRoomTypes: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing room_types item. */
  updateSingleItemsRoomTypes: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomTypes']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsRoomTypes']
      }
    }
  }
  /** List the room_types_translations items. */
  readItemsRoomTypesTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomTypesTranslations'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new room_types_translations item. */
  createItemsRoomTypesTranslations: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomTypesTranslations'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsRoomTypesTranslations'][]
          | components['schemas']['ItemsRoomTypesTranslations']
      }
    }
  }
  /** Retrieve a single room_types_translations item by unique identifier. */
  readSingleItemsRoomTypesTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomTypesTranslations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing room_types_translations item. */
  deleteSingleItemsRoomTypesTranslations: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing room_types_translations item. */
  updateSingleItemsRoomTypesTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomTypesTranslations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsRoomTypesTranslations']
      }
    }
  }
  /** List the rooms items. */
  readItemsRooms: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRooms'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new rooms item. */
  createItemsRooms: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRooms'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsRooms'][]
          | components['schemas']['ItemsRooms']
      }
    }
  }
  /** Retrieve a single rooms item by unique identifier. */
  readSingleItemsRooms: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRooms']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing rooms item. */
  deleteSingleItemsRooms: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing rooms item. */
  updateSingleItemsRooms: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRooms']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsRooms']
      }
    }
  }
  /** List the rooms_countries items. */
  readItemsRoomsCountries: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsCountries'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new rooms_countries item. */
  createItemsRoomsCountries: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsCountries'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsRoomsCountries'][]
          | components['schemas']['ItemsRoomsCountries']
      }
    }
  }
  /** Retrieve a single rooms_countries item by unique identifier. */
  readSingleItemsRoomsCountries: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsCountries']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing rooms_countries item. */
  deleteSingleItemsRoomsCountries: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing rooms_countries item. */
  updateSingleItemsRoomsCountries: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsCountries']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsRoomsCountries']
      }
    }
  }
  /** List the rooms_devices items. */
  readItemsRoomsDevices: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsDevices'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new rooms_devices item. */
  createItemsRoomsDevices: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsDevices'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsRoomsDevices'][]
          | components['schemas']['ItemsRoomsDevices']
      }
    }
  }
  /** Retrieve a single rooms_devices item by unique identifier. */
  readSingleItemsRoomsDevices: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsDevices']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing rooms_devices item. */
  deleteSingleItemsRoomsDevices: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing rooms_devices item. */
  updateSingleItemsRoomsDevices: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsDevices']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsRoomsDevices']
      }
    }
  }
  /** List the rooms_payments items. */
  readItemsRoomsPayments: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsPayments'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new rooms_payments item. */
  createItemsRoomsPayments: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsPayments'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsRoomsPayments'][]
          | components['schemas']['ItemsRoomsPayments']
      }
    }
  }
  /** Retrieve a single rooms_payments item by unique identifier. */
  readSingleItemsRoomsPayments: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsPayments']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing rooms_payments item. */
  deleteSingleItemsRoomsPayments: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing rooms_payments item. */
  updateSingleItemsRoomsPayments: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsPayments']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsRoomsPayments']
      }
    }
  }
  /** List the rooms_translations items. */
  readItemsRoomsTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsTranslations'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new rooms_translations item. */
  createItemsRoomsTranslations: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsTranslations'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsRoomsTranslations'][]
          | components['schemas']['ItemsRoomsTranslations']
      }
    }
  }
  /** Retrieve a single rooms_translations item by unique identifier. */
  readSingleItemsRoomsTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsTranslations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing rooms_translations item. */
  deleteSingleItemsRoomsTranslations: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing rooms_translations item. */
  updateSingleItemsRoomsTranslations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsRoomsTranslations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsRoomsTranslations']
      }
    }
  }
  /** List the settings items. */
  readItemsSettings: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsSettings'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new settings item. */
  createItemsSettings: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsSettings'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsSettings'][]
          | components['schemas']['ItemsSettings']
      }
    }
  }
  /** Retrieve a single settings item by unique identifier. */
  readSingleItemsSettings: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsSettings']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing settings item. */
  deleteSingleItemsSettings: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing settings item. */
  updateSingleItemsSettings: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsSettings']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsSettings']
      }
    }
  }
  /** List the system items. */
  readItemsSystem: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsSystem'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new system item. */
  createItemsSystem: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsSystem'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json':
          | components['schemas']['ItemsSystem'][]
          | components['schemas']['ItemsSystem']
      }
    }
  }
  /** Retrieve a single system item by unique identifier. */
  readSingleItemsSystem: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsSystem']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing system item. */
  deleteSingleItemsSystem: {
    parameters: {
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing system item. */
  updateSingleItemsSystem: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
      path: {
        /** Index of the item. */
        id: number | string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['ItemsSystem']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsSystem']
      }
    }
  }
  /** Returns a list of activity actions. */
  getActivities: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Activity'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Creates a new comment. */
  createComment: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Activity']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          collection: string
          item: number
          comment: string
        }
      }
    }
  }
  /** Retrieves the details of an existing activity action. Provide the primary key of the activity action and Directus will return the corresponding information. */
  getActivity: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Activity']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing comment. Deleted comments can not be retrieved. */
  deleteComment: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
    }
    responses: {
      /** Deleted successfully */
      203: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update the content of an existing comment. */
  updateComment: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Activity']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          comment?: string
        }
      }
    }
  }
  /** Returns a list of the collections available in the project. */
  getCollections: {
    parameters: {
      query: {
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Collections'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Create a new collection in Directus. */
  createCollection: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Collections']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Unique name of the collection. */
          collection: string
          /** The fields contained in this collection. See the fields reference for more information. Each individual field requires field, type, and interface to be provided. */
          fields: { [key: string]: any }[]
          /** Name of a Google Material Design Icon that's assigned to this collection. */
          icon?: string | null
          /** A note describing the collection. */
          note?: string | null
          /** Text representation of how items from this collection are shown across the system. */
          display_template?: string | null
          /** Whether or not the collection is hidden from the navigation in the admin app. */
          hidden?: boolean
          /** Whether or not the collection is treated as a single object. */
          singleton?: boolean
          /** Key value pairs of how to show this collection's name in different languages in the admin app. */
          translation?: string | null
          /** What field holds the archive value. */
          archive_field?: string | null
          /** What value to use for "archived" items. */
          archive_app_filter?: string | null
          /** What value to use to "unarchive" items. */
          archive_value?: string | null
          /** Whether or not to show the "archived" filter. */
          unarchive_value?: string | null
          /** The sort field in the collection. */
          sort_field?: string | null
        }
      }
    }
  }
  /** Retrieves the details of a single collection. */
  getCollection: {
    parameters: {
      path: {
        /** Unique identifier of the collection. */
        id: string
      }
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Collections']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution. */
  deleteCollection: {
    parameters: {
      path: {
        /** Unique identifier of the collection. */
        id: string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing collection. */
  updateCollection: {
    parameters: {
      path: {
        /** Unique identifier of the collection. */
        id: string
      }
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Collections']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Metadata of the collection. */
          meta?: {
            /** Name of a Google Material Design Icon that's assigned to this collection. */
            icon?: string | null
            /** Choose the color for the icon assigned to this collection. */
            color?: string | null
            /** A note describing the collection. */
            note?: string | null
            /** Text representation of how items from this collection are shown across the system. */
            display_template?: string | null
            /** Whether or not the collection is hidden from the navigation in the admin app. */
            hidden?: boolean
            /** Whether or not the collection is treated as a single object. */
            singleton?: boolean
            /** Key value pairs of how to show this collection's name in different languages in the admin app. */
            translation?: string | null
            /** What field holds the archive value. */
            archive_field?: string | null
            /** What value to use for "archived" items. */
            archive_app_filter?: string | null
            /** What value to use to "unarchive" items. */
            archive_value?: string | null
            /** Whether or not to show the "archived" filter. */
            unarchive_value?: string | null
            /** The sort field in the collection. */
            sort_field?: string | null
          }
        }
      }
    }
  }
  /** Returns a list of the fields available in the project. */
  getFields: {
    parameters: {
      query: {
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Fields'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Returns a list of the fields available in the given collection. */
  getCollectionFields: {
    parameters: {
      path: {
        /** Unique identifier of the collection the item resides in. */
        collection: string
      }
      query: {
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Fields'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Create a new field in a given collection. */
  createField: {
    parameters: {
      path: {
        /** Unique identifier of the collection the item resides in. */
        collection: string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Fields']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Unique name of the field. Field name is unique within the collection. */
          field: string
          /** Directus specific data type. Used to cast values in the API. */
          type: string
          /** The schema info. */
          schema?: {
            /** The name of the field. */
            name?: string
            /** The collection of the field. */
            table?: string
            /** The type of the field. */
            type?: string
            /** The default value of the field. */
            default_value?: string | null
            /** The max length of the field. */
            max_length?: number | null
            /** If the field is nullable. */
            is_nullable?: boolean
            /** If the field is primary key. */
            is_primary_key?: boolean
            /** If the field has auto increment. */
            has_auto_increment?: boolean
            /** Related column from the foreign key constraint. */
            foreign_key_column?: string | null
            /** Related table from the foreign key constraint. */
            foreign_key_table?: string | null
            /** Comment as saved in the database. */
            comment?: string | null
            /** Database schema (pg only). */
            schema?: string
            /** Related schema from the foreign key constraint (pg only). */
            foreign_key_schema?: string | null
          }
          /** The meta info. */
          meta?: {
            /** Unique identifier for the field in the `directus_fields` collection. */
            id?: number
            /** Unique name of the collection this field is in. */
            collection?: string
            /** Unique name of the field. Field name is unique within the collection. */
            field?: string
            /** Transformation flag for field */
            special?: string[] | null
            /** What interface is used in the admin app to edit the value for this field. */
            'system-interface'?: string | null
            /** Options for the interface that's used. This format is based on the individual interface. */
            options?: { [key: string]: any } | null
            /** What display is used in the admin app to display the value for this field. */
            display?: string | null
            /** Options for the display that's used. This format is based on the individual display. */
            display_options?: { [key: string]: any } | null
            /** If the field can be altered by the end user. Directus system fields have this value set to `true`. */
            locked?: boolean
            /** Prevents the user from editing the value in the field. */
            readonly?: boolean
            /** If this field should be hidden. */
            hidden?: boolean
            /** Sort order of this field on the edit page of the admin app. */
            sort?: number | null
            /** Width of the field on the edit form. */
            width?: ('half' | 'half-left' | 'half-right' | 'full' | 'fill') | null
            /** What field group this field is part of. */
            group?: number | null
            /** Key value pair of `<language>: <translation>` that allows the user to change the displayed name of the field in the admin app. */
            translation?: { [key: string]: any } | null
            /** A user provided note for the field. Will be rendered alongside the interface on the edit page. */
            note?: string | null
          } | null
        }
      }
    }
  }
  /** Retrieves the details of a single field in a given collection. */
  getCollectionField: {
    parameters: {
      path: {
        /** Unique identifier of the collection the item resides in. */
        collection: string
        /** Unique identifier of the field. */
        id: string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Fields']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing field. */
  deleteField: {
    parameters: {
      path: {
        /** Unique identifier of the collection the item resides in. */
        collection: string
        /** Unique identifier of the field. */
        id: string
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing field. */
  updateField: {
    parameters: {
      path: {
        /** Unique identifier of the collection the item resides in. */
        collection: string
        /** Unique identifier of the field. */
        id: string
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Fields']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Unique name of the field. Field name is unique within the collection. */
          field?: string
          /** Directus specific data type. Used to cast values in the API. */
          type?: string
          /** The schema info. */
          schema?: {
            /** The name of the field. */
            name?: string
            /** The collection of the field. */
            table?: string
            /** The type of the field. */
            type?: string
            /** The default value of the field. */
            default_value?: string | null
            /** The max length of the field. */
            max_length?: number | null
            /** If the field is nullable. */
            is_nullable?: boolean
            /** If the field is primary key. */
            is_primary_key?: boolean
            /** If the field has auto increment. */
            has_auto_increment?: boolean
            /** Related column from the foreign key constraint. */
            foreign_key_column?: string | null
            /** Related table from the foreign key constraint. */
            foreign_key_table?: string | null
            /** Comment as saved in the database. */
            comment?: string | null
            /** Database schema (pg only). */
            schema?: string
            /** Related schema from the foreign key constraint (pg only). */
            foreign_key_schema?: string | null
          }
          /** The meta info. */
          meta?: {
            /** Unique identifier for the field in the `directus_fields` collection. */
            id?: number
            /** Unique name of the collection this field is in. */
            collection?: string
            /** Unique name of the field. Field name is unique within the collection. */
            field?: string
            /** Transformation flag for field */
            special?: string[] | null
            /** What interface is used in the admin app to edit the value for this field. */
            'system-interface'?: string | null
            /** Options for the interface that's used. This format is based on the individual interface. */
            options?: { [key: string]: any } | null
            /** What display is used in the admin app to display the value for this field. */
            display?: string | null
            /** Options for the display that's used. This format is based on the individual display. */
            display_options?: { [key: string]: any } | null
            /** If the field can be altered by the end user. Directus system fields have this value set to `true`. */
            locked?: boolean
            /** Prevents the user from editing the value in the field. */
            readonly?: boolean
            /** If this field should be hidden. */
            hidden?: boolean
            /** Sort order of this field on the edit page of the admin app. */
            sort?: number | null
            /** Width of the field on the edit form. */
            width?: ('half' | 'half-left' | 'half-right' | 'full' | 'fill') | null
            /** What field group this field is part of. */
            group?: number | null
            /** Key value pair of `<language>: <translation>` that allows the user to change the displayed name of the field in the admin app. */
            translation?: { [key: string]: any } | null
            /** A user provided note for the field. Will be rendered alongside the interface on the edit page. */
            note?: string | null
          } | null
        }
      }
    }
  }
  /** List the files. */
  getFiles: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Files'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new file */
  createFile: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Files']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json': {
          data?: string
        }
      }
    }
  }
  /** Retrieve a single file by unique identifier. */
  getFile: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Files']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Delete an existing file. */
  deleteFile: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Update an existing file, and/or replace it's file contents. */
  updateFile: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Files']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'multipart/data': {
          /** Title for the file. Is extracted from the filename on upload, but can be edited by the user. */
          title?: string
          /** Preferred filename when file is downloaded. */
          filename_download?: string
          /** Description for the file. */
          description?: string | null
          /** Virtual folder where this file resides in. */
          folder?: (string | components['schemas']['Folders']) | null
          /** Tags for the file. Is automatically populated based on EXIF data for images. */
          tags?: string[] | null
          /** File contents. */
          file: { [key: string]: any }
        }
        'application/json': {
          /** Title for the file. Is extracted from the filename on upload, but can be edited by the user. */
          title?: string
          /** Preferred filename when file is downloaded. */
          filename_download?: string
          /** Description for the file. */
          description?: string | null
          /** Virtual folder where this file resides in. */
          folder?: (string | components['schemas']['Folders']) | null
          /** Tags for the file. Is automatically populated based on EXIF data for images. */
          tags?: string[] | null
        }
      }
    }
  }
  /** List the folders. */
  getFolders: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Folders'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Create a new folder. */
  createFolder: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Folders']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Name of the folder. */
          name: string
          /** Unique identifier of the parent folder. This allows for nested folders. */
          parent?: number
        }
      }
    }
  }
  /** Retrieve a single folder by unique identifier. */
  getFolder: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Folders']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing folder */
  deleteFolder: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing folder */
  updateFolder: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Folders']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Name of the folder. Can't be null or empty. */
          name?: string
          /** Unique identifier of the parent folder. This allows for nested folders. */
          parent?: number
        }
      }
    }
  }
  /** List all permissions. */
  getPermissions: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
        /** Cursor for use in pagination. Often used in combination with limit. */
        page?: components['parameters']['Page']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Permissions'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Create a new permission. */
  createPermission: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Permissions']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** What collection this permission applies to. */
          collection?: string
          /** If the user can post comments. */
          comment?: 'none' | 'create' | 'update' | 'full'
          /** If the user can create items. */
          create?: 'none' | 'full'
          /** If the user can update items. */
          delete?: 'none' | 'mine' | 'role' | 'full'
          /** If the user is required to leave a comment explaining what was changed. */
          explain?: 'none' | 'create' | 'update' | 'always'
          /** If the user can read items. */
          read?: 'none' | 'mine' | 'role' | 'full'
          /** Unique identifier of the role this permission applies to. */
          role?: number
          /** Explicitly denies read access for specific fields. */
          read_field_blacklist?: string[]
          /** What status this permission applies to. */
          status?: string
          /** Explicitly denies specific statuses to be used. */
          status_blacklist?: string[]
          /** If the user can update items. */
          update?: 'none' | 'mine' | 'role' | 'full'
          /** Explicitly denies write access for specific fields. */
          write_field_blacklist?: string[]
        }
      }
    }
  }
  /** List the permissions that apply to the current user. */
  getMyPermissions: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Permissions'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Retrieve a single permissions object by unique identifier. */
  getPermission: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Permissions']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing permission */
  deletePermission: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing permission */
  updatePermission: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Permissions']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** What collection this permission applies to. */
          collection?: { [key: string]: any }
          /** If the user can post comments. `full`. */
          comment?: 'none' | 'create' | 'update'
          /** If the user can create items. */
          create?: 'none' | 'full'
          /** If the user can update items. */
          delete?: 'none' | 'mine' | 'role' | 'full'
          /** If the user is required to leave a comment explaining what was changed. */
          explain?: 'none' | 'create' | 'update' | 'always'
          /** If the user can read items. */
          read?: 'none' | 'mine' | 'role' | 'full'
          /** Explicitly denies read access for specific fields. */
          read_field_blacklist?: { [key: string]: any }
          /** Unique identifier of the role this permission applies to. */
          role?: { [key: string]: any }
          /** What status this permission applies to. */
          status?: { [key: string]: any }
          /** Explicitly denies specific statuses to be used. */
          status_blacklist?: { [key: string]: any }
          /** If the user can update items. */
          update?: 'none' | 'mine' | 'role' | 'full'
          /** Explicitly denies write access for specific fields. */
          write_field_blacklist?: { [key: string]: any }
        }
      }
    }
  }
  /** List the presets. */
  getPresets: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** Cursor for use in pagination. Often used in combination with limit. */
        page?: components['parameters']['Page']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Presets'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Create a new preset. */
  createPreset: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Presets']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** What collection this collection preset is used for. */
          collection: string
          /** Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark. */
          title?: string
          /** The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role. */
          role?: string
          /** What the user searched for in search/filter in the header bar. */
          search?: string
          filters?: {
            key?: string
            field?: string
            operator?: string
            value?: number
          }[]
          /** Name of the view type that is used. */
          layout?: string
          /** Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters. */
          layout_query?: string
          /** Options of the views. The properties in here are controlled by the layout. */
          layout_options?: string
        }
      }
    }
  }
  /** Retrieve a single preset by unique identifier. */
  getPreset: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Presets']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Delete an existing preset. */
  deletePreset: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
    }
  }
  /** Update an existing preset. */
  updatePreset: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Presets']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** What collection this collection preset is used for. */
          collection: string
          /** Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark. */
          title?: string
          /** The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role. */
          role?: number
          /** What the user searched for in search/filter in the header bar. */
          search_query?: string
          filters?: {
            field?: string
            operator?: string
            value?: number
          }[]
          /** Name of the view type that is used. Defaults to tabular. */
          view_type?: string
          /** View query that's saved per view type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters. */
          view_query?: string
          /** Options of the views. The properties in here are controlled by the layout. */
          view_options?: string
          /** Key value pair of language-translation. Can be used to translate the bookmark title in multiple languages. */
          translation?: { [key: string]: any }
        }
      }
    }
  }
  /** List the relations. */
  getRelations: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
        /** Cursor for use in pagination. Often used in combination with limit. */
        page?: components['parameters']['Page']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Relations'][]
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Create a new relation. */
  createRelation: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Relations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Collection that has the field that holds the foreign key. */
          collection_many?: string
          /** Collection on the _one_ side of the relationship. */
          collection_one?: string
          /** Foreign key. Field that holds the primary key of the related collection. */
          field_many?: string
          /** Alias column that serves as the _one_ side of the relationship. */
          field_one?: string
          /** Field on the junction table that holds the primary key of the related collection. */
          junction_field?: string
        }
      }
    }
  }
  /** Retrieve a single relation by unique identifier. */
  getRelation: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Relations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing relation. */
  deleteRelation: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing relation */
  updateRelation: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Relations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Collection that has the field that holds the foreign key. */
          collection_many?: string
          /** Collection on the _one_ side of the relationship. */
          collection_one?: string
          /** Foreign key. Field that holds the primary key of the related collection. */
          field_many?: string
          /** Alias column that serves as the _one_ side of the relationship. */
          field_one?: string
          /** Field on the junction table that holds the primary key of the related collection. */
          junction_field?: string
        }
      }
    }
  }
  /** List the revisions. */
  getRevisions: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
        /** Cursor for use in pagination. Often used in combination with limit. */
        page?: components['parameters']['Page']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Revisions'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Retrieve a single revision by unique identifier. */
  getRevision: {
    parameters: {
      path: {
        /** Index */
        id: components['parameters']['Id']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Revisions']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** List the roles. */
  getRoles: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
        /** Cursor for use in pagination. Often used in combination with limit. */
        page?: components['parameters']['Page']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Roles'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Create a new role. */
  createRole: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Roles']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Description of the role. */
          description?: string
          /** Whether or not this role enforces the use of 2FA. */
          enforce_tfa?: boolean
          /** ID used with external services in SCIM. */
          external_id?: string
          /** Array of IP addresses that are allowed to connect to the API as a user of this role. */
          ip_whitelist?: string[]
          /** Custom override for the admin app module bar navigation. */
          module_listing?: string
          /** Name of the role. */
          name?: string
        }
      }
    }
  }
  /** Retrieve a single role by unique identifier. */
  getRole: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Roles']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing role */
  deleteRole: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing role */
  updateRole: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Roles']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Description of the role. */
          description?: string
          /** Whether or not this role enforces the use of 2FA. */
          enforce_tfa?: boolean
          /** ID used with external services in SCIM. */
          external_id?: string
          /** Array of IP addresses that are allowed to connect to the API as a user of this role. */
          ip_whitelist?: string[]
          /** Custom override for the admin app module bar navigation. */
          module_listing?: string
          /** Name of the role. */
          name?: string
        }
      }
    }
  }
  /** List the settings. */
  getSettings: {
    parameters: {
      query: {
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** Cursor for use in pagination. Often used in combination with limit. */
        page?: components['parameters']['Page']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Settings']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update the settings */
  updateSetting: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Settings']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': { [key: string]: any }
      }
    }
  }
  /** List the users. */
  getUsers: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** A limit on the number of objects that are returned. */
        limit?: components['parameters']['Limit']
        /** How many items to skip when fetching data. */
        offset?: components['parameters']['Offset']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components['parameters']['Sort']
        /** Select items in collection by given conditions. */
        filter?: components['parameters']['Filter']
        /** Filter by items that contain the given search query in one of their fields. */
        search?: components['parameters']['Search']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Users'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Create a new user. */
  createUser: {
    parameters: {
      query: {
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Users']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['Users']
      }
    }
  }
  /** Retrieve a single user by unique identifier. */
  getUser: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Users']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing user */
  deleteUser: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing user */
  updateUser: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: { [key: string]: any }
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['Users']
      }
    }
  }
  /** Invites one or more users to this project. It creates a user with an invited status, and then sends an email to the user with instructions on how to activate their account. */
  invite: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Users']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Email address or array of email addresses of the to-be-invited user(s). */
          email?: string
        }
      }
    }
  }
  /** Accepts and enables an invited user using a JWT invitation token. */
  acceptInvite: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Users']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Accept invite token. */
          token?: string
          /** Password of the user. */
          password?: string
        }
      }
    }
  }
  /** Retrieve the currently authenticated user. */
  getMe: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Users']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update the currently authenticated user. */
  updateMe: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Users']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Updates the last used page field of the currently authenticated user. This is used internally to be able to open the Directus admin app from the last page you used. */
  updateLastUsedPageMe: {
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** Path of the page you used last. */
          last_page?: string
        }
      }
    }
  }
  /** Enables two-factor authentication for the currently authenticated user. */
  meTfaEnable: {
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Disables two-factor authentication for the currently authenticated user. */
  meTfaDisable: {
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Get all webhooks. */
  getWebhooks: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Webhooks']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Create a new webhook. */
  createWebhook: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Roles']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** The name of the webhook. */
          name?: string
          /** Method used in the webhook. */
          method?: string
          /** The url of the webhook. */
          url?: string
          /** The status of the webhook. */
          status?: string
          /** If yes, send the content of what was done */
          data?: boolean
          /** The actions that triggers this webhook. */
          actions?: { [key: string]: any }
          /** The collections that triggers this webhook. */
          'system-collections'?: { [key: string]: any }
        }
      }
    }
  }
  /** Retrieve a single webhook by unique identifier. */
  getWebhook: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Webhooks']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing webhook */
  deleteWebhook: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing webhook */
  updateWebhook: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Roles']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': {
          /** The name of the webhook. */
          name?: string
          /** Method used in the webhook. */
          method?: string
          /** The url of the webhook. */
          url?: string
          /** The status of the webhook. */
          status?: string
          /** If yes, send the content of what was done */
          data?: boolean
          /** The actions that triggers this webhook. */
          actions?: { [key: string]: any }
          /** The collections that triggers this webhook. */
          'system-collections'?: { [key: string]: any }
        }
      }
    }
  }
  /** Get all flows. */
  getFlows: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Flows'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Create a new flow. */
  createFlow: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Flows']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': Partial<components['schemas']['Flows']>
      }
    }
  }
  /** Retrieve a single flow by unique identifier. */
  getFlow: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Flows']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing flow */
  deleteFlow: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing flow */
  updateFlow: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Flows']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': Partial<components['schemas']['Flows']>
      }
    }
  }
  /** Get all operations. */
  getOperations: {
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Operations'][]
            meta?: components['x-metadata']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Create a new operation. */
  createOperation: {
    parameters: {
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Operations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': Partial<components['schemas']['Operations']>
      }
    }
  }
  /** Retrieve a single operation by unique identifier. */
  getOperation: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Operations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Delete an existing operation */
  deleteOperation: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
    }
    responses: {
      /** Successful request */
      200: unknown
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
  }
  /** Update an existing operation */
  updateOperation: {
    parameters: {
      path: {
        /** Unique identifier for the object. */
        id: components['parameters']['UUId']
      }
      query: {
        /** Control what fields are being returned in the object. */
        fields?: components['parameters']['Fields']
        /** What metadata to return in the response. */
        meta?: components['parameters']['Meta']
      }
    }
    responses: {
      /** Successful request */
      200: {
        content: {
          'application/json': {
            data?: components['schemas']['Operations']
          }
        }
      }
      401: components['responses']['UnauthorizedError']
      404: components['responses']['NotFoundError']
    }
    requestBody: {
      content: {
        'application/json': Partial<components['schemas']['Operations']>
      }
    }
  }
}

export type Schema = {
  authors: components['schemas']['ItemsAuthors']
  authors_translations: components['schemas']['ItemsAuthorsTranslations']
  countries: components['schemas']['ItemsCountries']
  devices: components['schemas']['ItemsDevices']
  languages: components['schemas']['ItemsLanguages']
  networks: components['schemas']['ItemsNetworks']
  networks_translations: components['schemas']['ItemsNetworksTranslations']
  payments: components['schemas']['ItemsPayments']
  room_page_types: components['schemas']['ItemsRoomPageTypes']
  room_page_types_translations: components['schemas']['ItemsRoomPageTypesTranslations']
  room_pages: components['schemas']['ItemsRoomPages']
  room_types: components['schemas']['ItemsRoomTypes']
  room_types_translations: components['schemas']['ItemsRoomTypesTranslations']
  rooms: components['schemas']['ItemsRooms']
  rooms_countries: components['schemas']['ItemsRoomsCountries']
  rooms_devices: components['schemas']['ItemsRoomsDevices']
  rooms_payments: components['schemas']['ItemsRoomsPayments']
  rooms_translations: components['schemas']['ItemsRoomsTranslations']
  settings: components['schemas']['ItemsSettings']
  system: components['schemas']['ItemsSystem']
}
