/// <reference types="svelte" />
import { SvelteComponentTyped } from 'svelte';

export interface Props {
  /**
   * @default "svelte"
   */
  prop?: string;
}

export default class Component extends SvelteComponentTyped<Props, {}, {}> {}
