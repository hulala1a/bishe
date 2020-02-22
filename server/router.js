const express = require('express');
const query = require('./query');
const router = express.Router();

router.get('/apis/sexes', query.viewSex);
router.get('/apis/nations', query.viewNation);
router.get('/apis/native_places', query.viewNativePlace);
router.get('/apis/specialties', query.viewSpecialty);
router.get('/apis/reaching_points', query.viewReachingPoint);
router.get('/apis/specialties/:specialty/years/:year', query.viewClass);
router.get('/apis/specialties/:specialty/years/:year', query.viewTarget);
router.get('/apis/specialties/:specialty/years/:year/targets/:target', query.viewCourse);
router.get('/apis/specialties/:specialty/targets/:target/courses/:course', query.viewYear);
router.get('/apis/specialties/:specialty/years/:year/targets/:target/courses/:course', query.viewTop10);

module.exports = router;