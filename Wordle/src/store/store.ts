// store/loggedInUser.js
import testAuthentication from '@pinata/sdk/types/commands/data/testAuthentication';
import { defineStore } from 'pinia'
import Testing from '../services/testing';

export const useLoggedInUserStore = defineStore({
  
  // id is required so that Pinia can connect the store to the devtools
  id: 'testing',
  state: () =>{
    return { holder: [1],
       test:  Testing.getInstance()

    }

  },

  actions: {
    increment() {
      var test = Testing.getInstance()
      test.addToTrail()
      this.holder = [...test.getTrail()]
    }
  },
  getters: {
    getTest() {
      return 
    }
  },
})