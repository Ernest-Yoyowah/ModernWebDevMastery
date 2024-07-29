# System Analysis of CrowdStrike Outage on July 19, 2024

## Overview

On July 19, 2024, CrowdStrike experienced an outage due to a problematic update in their Rapid Response Content configuration for the Falcon platform. This issue affected Windows systems running sensor version 7.11 and above, causing crashes during a specific update window.

## Incident Summary

### Timeline

- **July 19, 2024, 04:09 UTC**: Release of Rapid Response Content configuration update.
- **July 19, 2024, 05:27 UTC**: Defective update reverted.
- **July 19, 2024, 05:27 UTC onwards**: Systems that came online after this time or did not connect during the affected window were not impacted.

### Impacted Systems

- **Windows Hosts**: Sensor version 7.11 and above.
- **Unimpacted Systems**: Mac and Linux hosts.

### Root Cause

A bug in the Content Validator allowed problematic content in the Rapid Response Content update to pass validation. This led to an out-of-bounds memory read when the update was applied, causing a Windows system crash (BSOD).

## Detailed Analysis

### Rapid Response Content

- **Definition**: Behavioral pattern-matching configurations used to detect new threat techniques. Delivered as Template Instances from a Content Configuration System to sensors.
- **Deployment**: Delivered through Channel Files, interpreted by the Content Interpreter, and executed by the Sensor Detection Engine.
- **Testing**: Includes stress testing, fuzzing, and validation checks before deployment.

### Testing and Deployment Failures

- **Content Validator Bug**: An error in the Content Validator allowed a problematic Template Instance to be validated and deployed.
- **Stress Testing**: The Template Type associated with the faulty instance had passed stress testing in staging environments, but the specific instance deployment failed.

## Mitigation and Prevention Measures

### Short-Term

- **Reversion**: The problematic update was reverted to prevent further impact.
- **Enhanced Monitoring**: Immediate checks and monitoring were established to track and manage the issue.

### Long-Term

- **Improved Testing**:

  - Local developer testing
  - Content update and rollback testing
  - Stress testing, fuzzing, and fault injection
  - Stability and interface testing

- **Validation and Error Handling**:

  - Additional validation checks for Rapid Response Content
  - Enhanced error handling in the Content Interpreter

- **Deployment Strategy**:

  - Implement staggered deployments starting with canary releases
  - Improve performance monitoring and feedback collection
  - Provide granular control and release notes for updates

- **Third-Party Validation**:
  - Conduct independent security code reviews
  - Review end-to-end quality processes from development to deployment

## Conclusion

The outage on July 19, 2024, was caused by a defect in the Rapid Response Content update deployment process. Immediate actions were taken to revert the faulty update and address the issue. Long-term measures are being implemented to enhance testing, validation, and deployment strategies to prevent similar incidents in the future.
