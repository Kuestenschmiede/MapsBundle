/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import {cssConstants as styles} from "./c4g-maps-constant";

export let cssConstants = jQuery.extend({
  BUTTON_APPLY: 'c4g-button-apply',
  DRAW_CONTENT_POINT: "c4g-draw-content-point",
  DRAW_CONTENT_LINESTRING: "c4g-draw-content-line",
  DRAW_CONTENT_POLYGON: "c4g-draw-content-polygon",
  DRAW_CONTENT_CIRCLE: "c4g-draw-content-circle",
  DRAW_CONTENT_FREEHAND: "c4g-draw-content-freehand",
  TOGGLE_CATEGORY: "c4g-toggle-category",
  TOGGLE_CATEGORY_OPEN: "c4g-toggle-category-open",
  TOGGLE_CATEGORY_CLOSED: "c4g-toggle-category-closed",
  CATEGORY_HEADLINE: 'catHeadline',
  BUTTON_DESELECT_ALL: 'c4g-btn-deselect-all-data',
  BUTTON_DELETE_ALL: 'c4g-btn-delete-all-data',
  BUTTON_TRANSLATE_ALL: 'c4g-btn-translate-all-data',
  BUTTON_DISPLACE_ALL: 'c4g-btn-displace-all-data',
  BUTTON_COPY_DISPLACE_ALL: 'c4g-btn-copy-displace-all-data',
  EDITOR_DIALOG_CONFIRM: "c4g-editor-dialog-confirm",
  EDITOR_DIALOG_CANCEL: "c4g-editor-dialog-cancel",
  BUTTON_EDIT_DATA: 'c4g-btn-edit-data',
  DATA_ERROR_LABEL: 'c4g-edit-data-error-label',
  PROJECT_ERROR_LABEL: 'c4g-edit-project-error-label',
  BUTTON_DUPLICATE_DATA: 'c4g-btn-duplicate-data',
  BUTTON_DISPLACE_DATA: 'c4g-btn-displace-data',
  BUTTON_DUPLICATE_DISPLACE_DATA: 'c4g-btn-duplicate-displace-data',
  BUTTON_ROTATE_DATA: 'c4g-btn-rotate-data',
  BUTTON_DESELECT_DATA: 'c4g-btn-deselect-data',
  BUTTON_REVERT_DATA: 'c4g-btn-revert-data',
  ACTIVE: "c4g-active",
  INACTIVE: "c4g-inactive",
  BUTTON_PROJECT_EDIT: "c4g-project-edit",
  BUTTON_PROJECT_DELETE: "c4g-project-delete",
  BUTTON_PROJECT_CREATE: "c4g-project-create",
  PROJECT_BUTTON_BAR: "c4g-projects-bar",

  EDITOR_DRAW_CONTENT_POINT: 'c4g-draw-content-point',
  EDITOR_DRAW_CONTENT_FREEHAND: 'c4g-draw-content-freehand',
  EDITOR_DRAW_CONTENT_LINESTRING: 'c4g-draw-content-line',
  EDITOR_DRAW_CONTENT_POLYGON: 'c4g-draw-content-polygon',
  EDITOR_DRAW_CONTENT_CIRCLE: 'c4g-draw-content-circle',
  EDITOR_DRAW_CONTENT_PROJECT: 'c4g-draw-content-project',
  EDITOR_DRAW_TRIGGER: 'c4g-draw-trigger',
  EDITOR_CONTENT_SELECT: 'c4g-content-select',
  EDITOR_DRAW_OPTIONS: 'c4g-editor-draw-options',
  EDITOR_FEATURE_APPLY: 'c4g-editor-feature-apply',
  EDITOR_FEATURE_DELETE: 'c4g-editor-feature-delete',
  EDITOR_FEATURE_MODIFY: 'c4g-editor-feature-modify',
  EDITOR_VIEW_TRIGGER_SELECT: 'c4g-editor-view-trigger-select',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'c4g-editor-view-trigger-draw-point',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-editor-view-trigger-draw-freehand',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-editor-view-trigger-draw-line',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-editor-view-trigger-draw-polygon',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-editor-view-trigger-draw-circle',

}, styles);
