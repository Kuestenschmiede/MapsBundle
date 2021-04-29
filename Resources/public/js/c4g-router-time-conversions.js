/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

/**
 * Converts a distance in meters to a more readable format.
 * @param distanceInMeters  The distance to convert.
 * @returns {string}
 */
export function toHumanDistance(distanceInMeters) {

  var distance,
    humanDistance;

  distance = parseInt(distanceInMeters, 10);
  distance = distance / 1000;

  if (distance >= 100) {
    humanDistance = distance.toFixed(0) + " " + 'km';
  } else if (distance >= 10) {
    humanDistance = distance.toFixed(1) + " " + 'km';
  } else if (distance >= 0.1) {
    humanDistance = distance.toFixed(2) + " " + 'km';
  } else {
    humanDistance = (distance * 1000).toFixed(0) + " " + 'm';
  }

  return humanDistance;
}

/**
 * Converts a time in seconds to a more readable format.
 * @param timeInSeconds     The time to convert.
 * @returns {string}
 */
export function toHumanTime(timeInSeconds) {

  var seconds,
    minutes,
    hours,
    humanTime;

  seconds = parseInt(timeInSeconds, 10);
  minutes = parseInt(seconds / 60, 10);
  seconds = seconds % 60;

  hours = parseInt(minutes / 60, 10);
  minutes = minutes % 60;

  if (hours === 0 && minutes === 0) {
    humanTime = seconds + " " + 's';
  } else if (hours === 0) {
    humanTime = minutes + " " + 'min';
  } else {
    humanTime = hours + " " + 'h' + " " + minutes + " " + 'min';
  }

  return humanTime;
}