declare namespace ExpectWebdriverIO {
    function setOptions(options: DefaultOptions): void

    interface DefaultOptions {
        /**
         * time in ms to wait for expectation to succeed. Default: 3000
         */
        wait?: number

        /**
         * interval between attempts. Default: 100
         */
        interval?: number
    }

    interface CommandOptions extends DefaultOptions {
        /**
         * user message to prepend before assertion error
         */
        message?: string
    }

    interface StringOptions extends CommandOptions {
        /**
         * apply `toLowerCase` to both actual and expected values
         */
        ignoreCase?: boolean

        /**
         * apply `trim` to actual value
         */
        trim?: boolean

        /**
         * expect actual value to contain expected value.
         * Otherwise strict equal
         */
        containing?: boolean

        /**
         * might be helpful to force converting property value to string
         */
        asString?: boolean
    }

    interface NumberOptions extends CommandOptions {
        /**
         * equals
         */
        eq?: number
        /**
         * less than or equals
         */
        lte?: number

        /**
         * greater than or equals
         */
        gte?: number
    }

    interface Matchers {
        // ===== $ or $$ =====
        /**
         * `WebdriverIO.Element` -> `isDisplayed`
         */
        toBeDisplayed(options?: ExpectWebdriverIO.CommandOptions): any
        /**
         * `WebdriverIO.Element` -> `isDisplayed`
         */
        toBeVisible(options?: ExpectWebdriverIO.CommandOptions): any

        /**
         * `WebdriverIO.Element` -> `isExisting`
         */
        toExist(options?: ExpectWebdriverIO.CommandOptions): any
        /**
         * `WebdriverIO.Element` -> `isExisting`
         */
        toBePresent(options?: ExpectWebdriverIO.CommandOptions): any
        /**
         * `WebdriverIO.Element` -> `isExisting`
         */
        toBeExisting(options?: ExpectWebdriverIO.CommandOptions): any

        /**
         * `WebdriverIO.Element` -> `isExisting`
         */
        toBeFocused(options?: ExpectWebdriverIO.CommandOptions): any

        /**
         * `WebdriverIO.Element` -> `getAttribute`
         */
        toHaveAttribute(attribute: string, value?: string, options?: ExpectWebdriverIO.StringOptions): any
        /**
         * `WebdriverIO.Element` -> `getAttribute`
         */
        toHaveAttr(attribute: string, value?: string, options?: ExpectWebdriverIO.StringOptions): any

        /**
         * `WebdriverIO.Element` -> `getAttribute`
         * Element's attribute includes the value.
         */
        toHaveAttributeContaining(attribute: string, contains: string, options?: ExpectWebdriverIO.StringOptions): any
        /**
         * `WebdriverIO.Element` -> `getAttribute`
         * Element's attribute includes the value.
         */
        toHaveAttrContaining(attribute: string, contains: string, options?: ExpectWebdriverIO.StringOptions): any

        /**
         * `WebdriverIO.Element` -> `getAttribute` class
         */
        toHaveClass(className: string, options?: ExpectWebdriverIO.StringOptions): any
        /**
         * `WebdriverIO.Element` -> `getAttribute` class
         * Element's class includes the className.
         */
        toHaveClassContaining(className: string, options?: ExpectWebdriverIO.StringOptions): any

        /**
         * `WebdriverIO.Element` -> `getProperty`
         */
        toHaveProperty(property: string, value?: any, options?: ExpectWebdriverIO.StringOptions): any

        /**
        * `WebdriverIO.Element` -> `getProperty` value
        */
        toHaveValue(value: string, options?: ExpectWebdriverIO.StringOptions): any
        /**
         * `WebdriverIO.Element` -> `getProperty` value
         * Element's value includes the value.
         */
        toHaveValueContaining(value: string, options?: ExpectWebdriverIO.StringOptions): any

        /**
        * `WebdriverIO.Element` -> `isClickable`
        */
        toBeClickable(options?: ExpectWebdriverIO.StringOptions): any

        /**
        * `WebdriverIO.Element` -> `!isEnabled`
        */
        toBeDisabled(options?: ExpectWebdriverIO.StringOptions): any

        /**
        * `WebdriverIO.Element` -> `isDisplayedInViewport`
        */
        toBeDisplayedInViewport(options?: ExpectWebdriverIO.StringOptions): any
        /**
        * `WebdriverIO.Element` -> `isDisplayedInViewport`
        */
        toBeVisibleInViewport(options?: ExpectWebdriverIO.StringOptions): any

        /**
        * `WebdriverIO.Element` -> `isEnabled`
        */
        toBeEnabled(options?: ExpectWebdriverIO.StringOptions): any

        /**
        * `WebdriverIO.Element` -> `isFocused`
        */
        toBeFocused(options?: ExpectWebdriverIO.StringOptions): any

        /**
        * `WebdriverIO.Element` -> `isSelected`
        */
        toBeSelected(options?: ExpectWebdriverIO.StringOptions): any

        /**
        * `WebdriverIO.Element` -> `isSelected`
        */
        toBeChecked(options?: ExpectWebdriverIO.StringOptions): any

        /**
        * `WebdriverIO.Element` -> `$$('./*').length`
        * supports less / greater then or equals to be passed in options
        */
        toHaveChildren(options?: ExpectWebdriverIO.NumberOptions): any

        /**
        * `WebdriverIO.Element` -> `getAttribute` href
        */
        toHaveHref(href: string, options?: ExpectWebdriverIO.StringOptions): any
        /**
        * `WebdriverIO.Element` -> `getAttribute` href
        */
        toHaveLink(href: string, options?: ExpectWebdriverIO.StringOptions): any

        /**
        * `WebdriverIO.Element` -> `getAttribute` href
        * Element's href includes the value provided
        */
        toHaveHrefContaining(href: string, options?: ExpectWebdriverIO.StringOptions): any
        /**
        * `WebdriverIO.Element` -> `getAttribute` href
        * Element's href includes the value provided
        */
        toHaveLinkContaining(href: string, options?: ExpectWebdriverIO.StringOptions): any

        /**
        * `WebdriverIO.Element` -> `getProperty` value
        */
        toHaveId(id: string, options?: ExpectWebdriverIO.StringOptions): any

        /**
         * `WebdriverIO.Element` -> `getText`
         */
        toHaveText(text: string, options?: ExpectWebdriverIO.StringOptions): any
        /**
        * `WebdriverIO.Element` -> `getText`
        * Element's text includes the text provided
        */
        toHaveTextContaining(text: string, options?: ExpectWebdriverIO.StringOptions): any


        // ===== browser only =====
        /**
         * `WebdriverIO.Browser` -> `getUrl`
         */
        toHaveUrl(url: string, options?: ExpectWebdriverIO.StringOptions): any
        /**
         * `WebdriverIO.Browser` -> `getTitle`
         */
        toHaveTitle(title: string, options?: ExpectWebdriverIO.StringOptions): any

        // ===== $$ only =====
        /**
        * `WebdriverIO.ElementArray` -> `$$('...').length`
        * supports less / greater then or equals to be passed in options
        */
        toBeElementsArrayOfSize(size: number | ExpectWebdriverIO.NumberOptions, options?: ExpectWebdriverIO.NumberOptions): any
    }
}

declare module "expect-webdriverio" {
    export = ExpectWebdriverIO
}
